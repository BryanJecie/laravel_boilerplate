<?php

namespace App\Services\FacebookApi;

class FacebookConversionApi extends FacebookApiService
{
    protected string $pixelId;
    // Conversion API params
    protected string $eventName;
    protected string|null $eventId = null;
    protected string|null $eventSourceUrl = null;
    protected string|null $actionSource;
    protected object|array|null $userData;
    protected object|array|null $customData;
    protected bool $optOut = false;

    public function __construct(string $pixelId)
    {
        parent::__construct();

        $this->pixelId = $pixelId;
    }

    public function setEventName(string $eventName): void
    {
        $this->eventName = $eventName;
    }

    public function setEventId(string $eventId): void
    {
        $this->eventId = $eventId;
    }

    public function setEventSourceUrl(string $eventSourceUrl): void
    {
        $this->eventSourceUrl = $eventSourceUrl;
    }

    public function setActionSource(string $actionSource): void
    {
        $this->actionSource = $actionSource;
    }

    public function setUserData(object $userData): void
    {
        $this->userData = $userData;
    }

    public function setCustomData(object $customData): void
    {
        $this->userData = $customData;
    }

    public function setOptOut(bool $optOut): void
    {
        $this->optOut = $optOut;
    }

    public function triggerEvent()
    {
        $api = $this->apiUrl . "{$this->pixelId}" . '/events';

        $response = $this->client->get($api , [
            'query' => [
                'access_token' => $this->accessToken,
                'data' => [
                    'event_name' => $this->eventName,
                    'event_id' => $this->eventId,
                    'event_time' => now(),
                    'user_data' => $this->userData,
                    'custom_data' => $this->customData,
                    'event_source_url' => $this->eventSourceUrl,
                    'action_source' => $this->actionSource,
                    'opt_out' => $this->optOut
                ],
            ]
        ]);

        $response = $this->parseResponse($response);

        return $response->data;
    }
}
