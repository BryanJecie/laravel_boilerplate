<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

/**
 * Class Controller.
 */
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * It returns a JSON response with the data, message, and HTTP status code
     *
     * @param data The data you want to return.
     * @param message The message you want to display to the user.
     * @param code HTTP status code
     *
     * @return A JSON response with the data, message, and code.
     */
    public function response($data = [], $message = 'Request success', $code = 200)
    {
        return response()
            ->json([
                'data' => $data,
                'message' => $message,
            ], $code);
    }
}
