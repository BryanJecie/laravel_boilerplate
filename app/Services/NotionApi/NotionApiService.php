<?php
namespace App\Services\NotionApi;

use GuzzleHttp\Client;
use Illuminate\Support\Collection;

class NotionApiService
{
    protected string $databaseId;
    protected string $secretKey;
    protected string $version;
    protected string $baseUrl;
    protected array $filters = [];
    protected array $filterProperties = [];
    protected array $children = [];
    protected array $payload = [];
    protected string|null $cursor;
    protected array|object $data;

    public function __construct()
    {
        $this->databaseId = config('services.notion.database_id');
        $this->secretKey = config('services.notion.secret_key');
        $this->version = config('services.notion.version');
        $this->baseUrl = config('services.notion.base_url');
    }

    public function headers(): array
    {
        return [
            'Authorization' => "Bearer {$this->secretKey}",
            'Notion-Version' => $this->version,
            'Content-Type' => 'application/json'
        ];
    }

    public function call(string $action = 'get'): array|object
    {
        $client = new Client();
        $json = new \stdClass();

        if (count($this->filters) > 0) {
            $json->filter = $this->filters;
        }

        if (!empty($this->cursor)) {
            $json->start_cursor = $this->cursor;
        }

        if (!empty($this->payload)) {
            if (isset($this->payload['properties'])) {
                $json->properties = $this->payload['properties'];
            }
            if (isset($this->payload['parent'])) {
                $json->parent = $this->payload['parent'];
            }
            if (isset($this->payload['children'])) {
                $json->children = $this->payload['children'];
            }
        }

            $response = $client->request($action, $this->baseUrl, [
            'headers' => $this->headers(),
            'json' => $json
        ]);

        $this->data = json_decode($response->getBody());

        return $this->data;
    }

    public function get(string $action = 'get', bool $returnResponse = false, $dd = false)
    {
        $data = [];
        $hasMore = true;
        $response = null;

        while ($hasMore) {
            $response = $this->call($action);
            $hasMore = optional($response)->has_more;
            $this->cursor = optional($response)->next_cursor;
            $results = optional($response)->results ?? [];

            if (count($results) > 0 && !$returnResponse) {
                $results = $this->getResultProperties($results);
                $data = array_merge($data, $results);
            }
        }

        if ($returnResponse) {
            return $response;
        }

        return collect($data);
    }

    private function getResultProperties(array $results): array
    {
        $formattedResults = [];
        $formattedData = [];

        foreach ($results as $result) {
            $url = !empty(optional($result)->url) ? $result->url : '(NO URL)';
            $formattedResults[$result->id . '___' . $url] = optional($result)->properties ?? [];
        }

        foreach ($formattedResults as $idurl => $formattedResult) {
            $idurl = explode('___', $idurl);
            $item = new \stdClass();
            $item->id = $idurl[0];
            $item->notion_url = $idurl[1];

            foreach ($formattedResult as $key => $value) {
                $item->{$key} = $this->mapPropertyValue($value);
            }

            $formattedData[] = $item;
        }

        return $formattedData;
    }

    public function databaseApi(string $databaseId = null): self
    {
        if (!empty($databaseId)) {
            $this->databaseId = $databaseId;
        }

        $this->baseUrl .= "databases/{$this->databaseId}/query?";

        if (count($this->filterProperties) > 0) {
            foreach ($this->filterProperties as $key => $filterProperty) {
                if ($key > 0) {
                    $this->baseUrl .= "&";
                }

                $this->baseUrl .= "filter_properties={$filterProperty}";
            }
        }

        return $this;
    }

    public function pageApi(string $pageId = null): self
    {
        $this->baseUrl = 'https://api.notion.com/v1/';
        $this->baseUrl .= "pages/";

        if (!empty($pageId)) {
            $this->baseUrl .= $pageId;
        }

        return $this;
    }

    public function blockApi(string $pageId): self
    {
        $this->baseUrl = 'https://api.notion.com/v1/';
        $this->baseUrl .= "blocks/{$pageId}/children";

        return $this;
    }

    public function setPayload(array $payload): self
    {
        $this->payload = $payload;

        return $this;
    }

    public function setCursor(string $cursor): self
    {
        $this->cursor = $cursor;

        return $this;
    }

    public function setFilterProperties(array $properties): self
    {
        $this->filterProperties = $properties;

        return $this;
    }

    public function filter(array $filters): self
    {
        $this->filters = $filters;

        return $this;
    }

    protected function mapPropertyValue($value): mixed
    {
        switch ($value->type) {
            case 'rich_text':
                $val = $value->rich_text;
                return isset($val[0]) ? $val[0]->text->content : null;
            case 'select':
                return optional($value->select)->name;
            case 'title':
                $val = $value->title;
                return isset($val[0]) ? $val[0]->text->content : null;
            case 'number':
                return $value->number;
            case 'relation':
                return $value->relation;
            case 'multi_select':
                $val = [];
                foreach ($value->multi_select as $ms) {
                    $val[] = $ms->name;
                }
                return $val;
        }

        return null;
    }
}
