<?php

use Carbon\Carbon;

if (!function_exists('appName')) {
    /**
     * Helper to grab the application name.
     *
     * @return mixed
     */
    function appName()
    {
        return config('app.name', 'Laravel Boilerplate');
    }
}

if (!function_exists('carbon')) {
    /**
     * Create a new Carbon instance from a time.
     *
     * @param $time
     * @return Carbon
     *
     * @throws Exception
     */
    function carbon($date = null)
    {
        if (!$date) {
            $date = Carbon::today();
        }

        return new Carbon($date);
    }
}

if (!function_exists('homeRoute')) {
    /**
     * Return the route to the "home" page depending on authentication/authorization status.
     *
     * @return string
     */
    function homeRoute()
    {
        if (auth()->check()) {
            if (auth()->user()->isAdmin()) {
                return 'admin.dashboard';
            }

            if (auth()->user()->isUser()) {
                // return 'frontend.user.account';
                return 'frontend.user.dashboard';
            }
        }

        return 'frontend.index';
    }
}


if (!function_exists('generateCode')) {
    /**
     * Generate Code depending of selected model
     *
     * @return string
     */
    function generateCode($key, $model)
    {
        $count = is_int($model) ? $model : $model->count();
        $code = str_pad(($count + 1), 4, 0, STR_PAD_LEFT);
        return  $key ? "{$key}-{$code}" : $code;
    }
}
