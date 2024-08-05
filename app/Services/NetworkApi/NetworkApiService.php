<?php
namespace App\Services\NetworkApi;

use App\Core\v1\Platform\Models\Platform;
use App\Services\ApiService;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;

class NetworkApiService extends ApiService
{
    protected string $networkKey;
    protected string $baseUrl;
    protected string $target;
    protected string|null $targetKey = null;
    protected string $method;
    protected array $payload = [];
    protected array $filters = [];
    protected object|array $data;
    protected bool $responseDataLevelDeep = true;
    protected int|null $pageCount = null;
    protected int $page = 1;

    public function __construct(Platform $platform)
    {
        parent::__construct($platform);
    }

    public function initialize()
    {
        $credentials = json_decode($this->platform->credentials);
        $this->baseUrl = $credentials->url;
        $this->networkKey = $credentials->key;
    }

    public function getPageCount(): int|null
    {
        return $this->pageCount;
    }

    public function filter(array $filters = []): self
    {
        $this->filters = $filters;

        return $this;
    }

    public function call(string $requestMethod = 'get'): Collection
    {
        $response = Http::$requestMethod($this->baseUrl, $this->composePayload());

        try {
            $this->formatData($response->object());
        } catch (\Exception $exception) {
            print_r($exception->getTraceAsString());
        }

        return Collection::make($this->data);
    }

    protected function composePayload(): array
    {
        return array_merge($this->payload, [
            'NetworkToken' => $this->networkKey,
            'Target' => $this->target,
            'Method' => $this->method,
            'filters' => $this->filters,
            'page' => $this->page
        ]);
    }

    private function formatData(object $responseData): void
    {
        $data = [];
        $this->pageCount = optional(optional($responseData->response)->data)->pageCount;

        if ($this->responseDataLevelDeep) {
            $rawData = optional(optional($responseData->response)->data)->data ?? [];
        } else {
            $rawData = optional($responseData->response)->data ?? [];
        }

        if (is_null($this->targetKey)) {
            $this->data = $rawData;
        } else {
            if (isset($rawData->{$this->targetKey})) {
                $data[] = $rawData->{$this->targetKey};
            } else {
                foreach ($rawData as $key => $value) {
                    $data[] = $value->{$this->targetKey};
                }
            }

            $this->data = $data;
        }
    }

    /** API endpoints  */

    public function getTags(): Collection
    {
        $this->target = 'Tag';
        $this->targetKey = 'Tag';
        $this->method = 'findAll';

        return $this->call();
    }

    public function findTag(int $tagId): object
    {
        $this->target = 'Tag';
        $this->targetKey = 'Tag';
        $this->method = 'findById';
        $this->payload['id'] = $tagId;
        $this->responseDataLevelDeep = false;

        return $this->call()->first();
    }

    public function getTagAffiliateIds(): Collection
    {
        $this->target = 'Tag';
        $this->targetKey = 'AffiliatesTags';
        $this->method = 'findAllAffiliateTagRelations';

        return $this->call();
    }

    public function getTagAdvertiserIds()
    {
        $this->target = 'Tag';
        $this->targetKey = 'AdvertisersTags';
        $this->method = 'findAllAdvertiserTagRelations';

        return $this->call();
    }

    public function getTagOfferIds()
    {
        $this->target = 'Tag';
        $this->targetKey = 'OffersTags';
        $this->method = 'findAllOfferTagRelations';

        return $this->call();
    }

    public function getAffiliatesById(array $ids): Collection
    {
        $this->target = 'Affiliate';
        $this->targetKey = 'Affiliate';
        $this->method = 'findAllByIds';
        $this->payload['ids'] = $ids;
        $this->responseDataLevelDeep = false;

        return $this->call();
    }

    public function getApprovedOffers(int $affiliateId)
    {
        $this->target = 'Affiliate';
        $this->targetKey = null;
        $this->method = 'getApprovedOfferIds';
        $this->payload['id'] = $affiliateId;
        $this->responseDataLevelDeep = false;

        return $this->call();
    }

    public function getOfferByIds(array $offerIds, int $page = 1, int $limit = null)
    {
        $this->target = 'Offer';
        $this->targetKey = 'Offer';
        $this->method = 'findAllByIds';
        $this->payload['ids'] = $offerIds;
        $this->responseDataLevelDeep = false;
        $this->page = $page;

        if (!is_null($limit)) {
            $this->payload['limit'] = $limit;
        }

        return $this->call();
    }

    public function getOfferCreatives(int $offerId)
    {
        $this->target = 'AdManager';
        $this->targetKey = 'Creative';
        $this->method = 'findAllCreatives';
        $this->filters['offer_id'] = $offerId;
        $this->responseDataLevelDeep = false;

        return $this->call();
    }

    public function getOfferTrackingLink(int $offerId, int $affiliateId)
    {
        $this->target = 'AdManager';
        $this->targetKey = 'Creative';
        $this->method = 'generateTrackingLink';
        $this->payload['offer_id'] = $offerId;
        $this->payload['affiliate_id'] = $affiliateId;
        $this->responseDataLevelDeep = false;

        return $this->call();
    }

    public function getOffers(int $page = 1, int $limit = 50)
    {
        $this->target = 'Offer';
        $this->targetKey = 'Offer';
        $this->method = 'findAll';
        $this->payload['page'] = $page;
        $this->payload['limit'] = $limit;
        $this->filters['status'] = 'active';
        $this->responseDataLevelDeep = false;

        return $this->call();
    }

    public function getOfferByAffiliateId(int $affiliateId)
    {
        $this->target = 'Offer';
        $this->targetKey = null;
        $this->method = 'findAllIdsByAffiliateId';
        $this->payload['affiliate_id'] = $affiliateId;
        $this->responseDataLevelDeep = false;

        return $this->call();
    }

    public function generateOfferTrackingLink(int $offerId, int $affiliateId)
    {
        $this->target = 'Offer';
        $this->targetKey = null;
        $this->method = 'generateTrackingLink';
        $this->payload['offer_id'] = $offerId;
        $this->payload['affiliate_id'] = $affiliateId;
        $this->responseDataLevelDeep = false;

        return $this->call();
    }

    public function getOfferUrls(int $offerId)
    {
        $this->target = 'OfferUrl';
        $this->targetKey = 'OfferUrl';
        $this->method = 'findAll';
        $this->filters['offer_id'] = $offerId;
        $this->responseDataLevelDeep = false;

        return $this->call();
    }

    public function getOfferFiles(int $offerId)
    {
        $this->target = 'OfferFile';
        $this->targetKey = 'OfferFile';
        $this->method = 'findAll';
        $this->filters['offer_id'] = $offerId;

        return $this->call();
    }

    public function getAdvertisers()
    {
        $this->target = 'Advertiser';
        $this->targetKey = 'Advertiser';
        $this->method = 'findAll';
        $this->responseDataLevelDeep = false;

        return $this->call();
    }
}
