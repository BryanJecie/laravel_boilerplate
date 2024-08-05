<?php

namespace App\Services;

use App\Core\v1\Platform\Models\Platform;

abstract class ApiService
{
    protected Platform $platform;

    public function __construct(Platform $platform)
    {
        $this->platform = $platform;

        $this->initialize();
    }

    public abstract function initialize();
}
