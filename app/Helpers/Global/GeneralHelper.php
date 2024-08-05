<?php

use Carbon\Carbon;
use Core\reports\sales\models\SalesTransaction;
use Core\reports\sales\overrides\Sheets;
use App\Overrides\Cache;
use Carbon\CarbonPeriod;
use Core\quickbox3pl\models\ExtractedInvoicesMerge;
use Illuminate\Support\Collection;

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
    function carbon($time = null)
    {
        if (!$time) {
            $time = now();
        }

        return new Carbon($time);
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
                return 'frontend.user.dashboard';
            }
        }

        return 'frontend.index';
    }
}


if (!function_exists('hasValue')) {
    /**
     * Return the String.
     *
     * @return string
     */
    function hasValue($string)
    {
        if (empty($string)) {
            return false;
        }

        if (!$string) {
            return false;
        }

        if (!isset($string)) {
            return false;
        }

        return true;
    }
}

if (!function_exists('salesTableFields')) {
    /**
     * return array of sales table fields
     *
     * @param String
     */
    function salesTableFields($fileName =  null, $path = 'sales')
    {
        if (!$fileName) {
            return null;
        }

        $filePath = storage_path("{$path}/{$fileName}.json");

        if (!file_exists($filePath)) {
            return null;
        }

        $json = File::get($filePath);

        if (!$json) {
            return null;
        }

        return collect(json_decode(json: $json, associative: true))
            ->map(fn ($data)  => $data)
            ->toArray();
    }
}

if (!function_exists('setSalesFields')) {
    /**
     * return array of sales table fields
     *
     * @param String
     */
    function setSalesFields($key =  null)
    {
        if (!$key) {
            return config('sales-table');
        }

        return config('sales-table')[$key];
    }
}


if (!function_exists('utmSourceFields')) {
    /**
     * return array of sales table fields
     *
     * @param String
     */
    function utmSourceFields($key = 'Paid', $name =  'sourceValue2')
    {
        $utmSourceArray = salesTableFields("utm_source", 'utms')[$key];
        $sourceValue2 = array_merge(...array_column($utmSourceArray, 'sourceValue2'));
        $utmSource = array_merge(...array_column($utmSourceArray, 'utm_source'));

        if ($name === 'sourceValue2') {
            return $sourceValue2;
        }

        if ($name === 'utmSource') {
            return $utmSource;
        }

        return [
            'sourceValue2' => $sourceValue2,
            'utmSource' => $utmSource,
        ];
    }
}


if (!function_exists('allUTMSourceValue')) {
    /**
     * return array of sales table fields
     *
     * @param String
     */
    function allUTMSourceValue($name = 'sourceValue2')
    {
        $utmSourceArray = [];
        $sourceValue2Array = [];

        foreach (salesTableFields("utm_source", 'utms') as $fields) {
            foreach ($fields as $field) {
                if ($field['utm_source']) {
                    foreach ($field['utm_source'] as $utmSource) {
                        $utmSourceArray[] = $utmSource;
                    }
                }
                if ($field['sourceValue2']) {
                    foreach ($field['sourceValue2'] as $id) {
                        $sourceValue2Array[] = $id;
                    }
                }
            }
        }

        if ($name === 'sourceValue2') {
            return $sourceValue2Array;
        }

        if ($name === 'utmSource') {
            return $utmSourceArray;
        }

        return [
            'sourceValue2' => $sourceValue2Array,
            'utmSource' => $utmSourceArray,
        ];
    }
}


if (!function_exists('setTotalAmount')) {
    /**
     * return total amount
     *
     * @param Number
     * @param Array
     * @param Array
     */
    function setTotalAmount($key, array $items, $types = [])
    {
        $total = 0;

        foreach ($items as $item) {
            if (in_array($item['txnType'], $types)) {
                switch ($key) {
                    case 0:
                    case 2:
                        $total += $item['total_amount'];
                        break;
                    case 1:
                        $total += 1;
                        break;
                    case 3:
                        $total += 1;
                        break;
                }
            }
        }

        return $total;
    }
}

if (!function_exists('setPaginate')) {
    /**
     * return array paginate
     *
     */
    function setPaginate($paginated)
    {
        return  [
            'total' => $paginated->total(),
            "per_page" => $paginated->perPage(),
            "current_page" => $paginated->currentPage(),
            "last_page" => $paginated->lastPage(),
            "first_page_url" => $paginated->url(1),
            "last_page_url" => $paginated->lastPage(),
            "next_page_url" => $paginated->nextPageUrl(),
            "prev_page_url" => $paginated->previousPageUrl(),
            "from" => $paginated->currentPage(),
            "to" => (int)$paginated->perPage(),
            'path' => $paginated->path(),
        ];
    }
}


if (!function_exists('setTotalShippingCost')) {
    /**
     * @param collections
     *
     * return int
     */
    function setTotalShippingCost($collections)
    {
        if (empty($collections)) {
            return 0;
        }

        $total = 0;

        foreach ($collections as $items) {
            $total += $items->packaging_cost;
            $total += $items->pick_pack_cost;
            $total += $items->addtl_pick_cost;
            $total += $items->international_cost;
            $total += $items->insert_labor_cost;
            $total += $items->addtl_pick_case_cost;
            $total += $items->item_charges;
            $total += $items->price;
        }

        return $total;
    }
}


if (!function_exists('getDateList')) {
    /**
     * return array paginate
     *
     */
    function getDateList($startDate, $endDate)
    {
        $startDate = Carbon::createFromFormat('m/d/Y', $startDate);
        $endDate = Carbon::createFromFormat('m/d/Y', $endDate);

        // Generate period
        return CarbonPeriod::create($startDate, $endDate);
    }
}


if (!function_exists('str_slug')) {
    /**
     * return array paginate
     *
     */
    function str_slug($string, $key = null)
    {
        $char = $string;

        if ($key) {
            $char = "{$key} {$string}";
        }

        return Str::slug($char);
    }
}
