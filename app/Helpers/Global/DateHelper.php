<?php

use Carbon\Carbon;

if (!function_exists('carbon')) {
    /**
     * Return carbon date.
     *
     * @param  mixed $datetime
     * @return \Carbon\CarbonImmutable
     */
    function carbon($datetime = null)
    {
        if ($datetime instanceof \Carbon\CarbonImmutable) {
            return $datetime;
        }

        if ($datetime instanceof \DateTime) {
            $datetime = $datetime->format('Y-m-d H:i:s');
        }

        return new \Carbon\CarbonImmutable($datetime);
    }
}

if (!function_exists('sql_date_format')) {
    /**
     * Return mysql date format.
     *
     * @return string
     */
    function sql_date_format()
    {
        return 'Y-m-d';
    }
}

if (!function_exists('sql_datetime_format')) {
    /**
     * Return mysql date format.
     *
     * @return string
     */
    function sql_datetime_format()
    {
        return 'Y-m-d H:i:s';
    }
}

if (!function_exists('sql_date')) {
    /**
     * Convert date to mysql date format.
     *
     * @param  string $date
     * @return string
     */
    function sql_date($date)
    {
        return $date ? Carbon::parse($date)->format(sql_date_format()) : null;
    }
}

if (!function_exists('sql_datetime')) {
    /**
     * Convert date to mysql datetime format.
     *
     * @param  string $date
     * @return string
     */
    function sql_datetime($date)
    {
        return $date ? Carbon::parse($date)->format(sql_datetime_format()) : null;
    }
}

if (!function_exists('startOfDay')) {
    /**
     * Convert date to startOfDay format.
     *
     * @param  string $date
     * @return string
     */
    function startOfDay($date)
    {
        return Carbon::createFromFormat('Y-m-d', sql_date($date))->startOfDay();
    }
}

if (!function_exists('endOfDay')) {
    /**
     * Convert date to endOfDay format.
     *
     * @param  string $date
     * @return string
     */
    function endOfDay($date)
    {
        return Carbon::createFromFormat('Y-m-d', sql_date($date))->endOfDay();
    }
}

if (!function_exists('is_date')) {
    /**
     * Check if the date is valid format.
     *
     * @param string $date
     * @return Boolean
     */

    function is_date($date, $format = 'Y-m-d H:i:s')
    {
        if (!hasValue($date)) {
            return false;
        }

        try {
            $dateFormated = Carbon::createFromFormat($format, $date);

            if ($dateFormated instanceof Carbon && $dateFormated->isValid()) {
                if ($dateFormated->year >= 0 && $dateFormated->year <= 9999) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } catch (\Carbon\Exceptions\InvalidFormatException $e) {
            //dd($e->getMessage() . " Invalid Format Exception");
            return false;
        }
    }
}
