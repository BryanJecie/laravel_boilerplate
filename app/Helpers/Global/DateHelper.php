<?php


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
        return $date ? carbon($date)->format(sql_date_format()) : null;
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
        return $date ? carbon($date)->format(sql_datetime_format()) : null;
    }
}

// https://stackoverflow.com/questions/19271381/correctly-determine-if-date-string-is-a-valid-date-in-that-format
if (!function_exists('is_date')) {
    function is_date($date, $format = 'Y-m-d')
    {
        $d = DateTime::createFromFormat($format, $date);
        // The Y ( 4 digits year ) returns TRUE for any integer with any number of digits so changing the comparison from == to === fixes the issue.
        return $d && $d->format($format) === $date;
    }
}
