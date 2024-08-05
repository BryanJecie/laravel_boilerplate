<?php

namespace App\Services\FacebookApi;

use App\Core\v1\Facebook\Models\FacebookInsight;
use Carbon\Carbon;

class FacebookAdsApi extends FacebookApiService
{
    protected string $dateStart;
    protected string $dateEnd;
    protected int $brand;

    public function __construct(int $adsAccount)
    {
        parent::__construct();

        $this->brand = $adsAccount;
        $this->adAccountId = FacebookInsight::getBrandAccountId($adsAccount);
    }

    public function setDateRange(Carbon $start, Carbon $end): self
    {
        $this->dateStart = $start->format('Y-m-d');
        $this->dateEnd = $end->format('Y-m-d');

        return $this;
    }

    public function campaigns(string $cursor = null)
    {
        $api = $this->apiUrl . "act_{$this->adAccountId}" . '/campaigns';

        $response = $this->client->get($api, [
            'query' => [
                'access_token' => $this->accessToken,
                'level' => 'campaign',
                'fields' => 'id,name,created_time',
                'filtering' => [
                    ['field' => 'ad.impressions', 'operator' => 'GREATER_THAN', 'value' => 0]
                ],
                'limit' => 10000,
                'after' => $cursor
            ]
        ]);

        $response = $this->parseResponse($response);

        return $response->data;
    }

    public function adSets(): array
    {
        $api = $this->apiUrl . "act_{$this->adAccountId}" . '/adsets';

        $response = $this->client->get($api, [
            'query' => [
                'access_token' => $this->accessToken,
                'level' => 'ad_set',
                'fields' => 'id,name',
                'filtering' => [
                    ['field' => 'ad.impressions', 'operator' => 'GREATER_THAN', 'value' => 0]
                ],
                'limit' => 10000
            ]
        ]);

        $response = $this->parseResponse($response);

        return $response->data;
    }

    public function ads(): array
    {
        $api = $this->apiUrl . "act_{$this->adAccountId}" . '/ads';

        $response = $this->client->get($api, [
            'query' => [
                'access_token' => $this->accessToken,
                'level' => 'ad',
                'fields' => 'id,name',
                'filtering' => [
                    ['field' => 'ad.impressions', 'operator' => 'GREATER_THAN', 'value' => 0]
                ],
                'limit' => 10000
            ]
        ]);

        $response = $this->parseResponse($response);

        return $response->data;
    }

    public function insights(int $dataId): array
    {
        $api = $this->apiUrl . "{$dataId}/insights";

        $params = [
            'date_preset' => 'maximum',
            'fields' => 'impressions,clicks,cpc,cpm,ctr,outbound_clicks,outbound_clicks_ctr,spend,reach,frequency,created_time,account_currency',
            'access_token' => $this->accessToken,
        ];

        if (!empty($this->dateStart) && !empty($this->dateEnd)) {
            $params['time_range'] = [
                'since' => $this->dateStart,
                'until' => $this->dateEnd
            ];
        }

        $response = $this->client->get($api, [
            'query' => $params
        ]);

        $response = $this->parseResponse($response);

        return $response->data;
    }
}
