<?php
namespace App\Services\MaropostApi;

use GuzzleHttp\Client;

class MaropostApiService
{
    protected string $accountId;
    protected string $authToken;
    protected string $baseUrl;
    protected array $baseUrls = [];
    protected string $apiUrl;
    protected array $payload = [];
    protected array|object $data;

    const BASE_URL_CLOUD = 1;
    const BASE_URL_CLOUD_1 = 2;
    const BASE_URL_REPORTING = 3;

    public function __construct(int $accountId, string $authToken)
    {
        $this->accountId = $accountId;
        $this->authToken = $authToken;
        $this->initializeBaseUrls();
        $this->setBaseUrl();
    }

    protected function initializeBaseUrls(): void
    {
        $this->baseUrls = [
            self::BASE_URL_CLOUD => config('services.maropost.base_url'),
            self::BASE_URL_CLOUD_1 => config('services.maropost.base_url_cloud_1'),
            self::BASE_URL_REPORTING => config('services.maropost.base_url_reporting')
        ];
    }

    public function setBaseUrl(int $baseUrlType = self::BASE_URL_CLOUD): self
    {
        $this->baseUrl = $this->baseUrls[$baseUrlType];

        return $this;
    }

    public function accountAPI(string $action): self
    {
        $this->apiUrl = $this->baseUrl . "{$this->accountId}/{$action}";

        return $this;
    }

    public function payload(array $payload): self
    {
        $this->payload = $payload;

        return $this;
    }

    protected function headers()
    {
        return [
            'Content-Type' => 'application/json',
            'Accept' => 'application/json',
        ];
    }

    public function call(string $action = 'get')
    {
        $payloadKey = ($action == 'get') ? 'query' : 'json';
        $client = new Client;
        $requestPayload = array_merge($this->payload, [
            'auth_token' => $this->authToken
        ]);


        $response = $client->request($action, $this->apiUrl, [
            'headers' => $this->headers(),
            $payloadKey => $requestPayload
        ]);

        $this->data = json_decode($response->getBody());

        return $this->data;
    }
}
