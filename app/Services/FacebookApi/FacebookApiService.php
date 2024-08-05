<?php
namespace App\Services\FacebookApi;
use FacebookAds\Api;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Response;

class FacebookApiService
{
    protected string $accessToken;
    protected string $baseApiUrl;
    protected string $adAccountId;
    protected string $apiUrl;
    protected Client $client;
    protected array $data = [];

    public function __construct()
    {
        $this->client = new Client;
        $this->baseApiUrl = config('services.facebook.api_base_url');
        $this->apiUrl = $this->baseApiUrl . '/' . config('services.facebook.api_version') . '/';

        $this->requestAccessToken();
    }

    private function requestAccessToken(): void
    {
        $clientId = config('services.facebook.client_id');
        $clientSecret = config('services.facebook.client_secret');
        $this->accessToken = config('services.facebook.access_token');
    }

    protected function parseResponse(Response $response)
    {
        return json_decode($response->getBody());
    }
}
