<?php

namespace App\Services;

use App\Core\v1\Platform\Models\Platform;
use App\Services\NetworkApi\NetworkApiService;

class DataProviderApi
{
    protected object $credentials;
    protected Platform|null $platform;

    public function __construct(string $platformName)
    {
        $this->platform = $platform = Platform::where('name', $platformName)->first();

        if (empty($platform)) {
            throw new \Exception("Invalid platform", 404);
        }

        $this->credentials = json_decode($platform->credentials);
    }

    public function getPlatform(): Platform
    {
        return $this->platform;
    }

    public function getApiService(): ApiService
    {
        $apiService = null;
        switch ($this->platform->api_provider) {
            case Platform::API_PROVIDER_NETWORK:
                $apiService = new NetworkApiService($this->platform);
                break;
        }

        return $apiService;
    }
}
