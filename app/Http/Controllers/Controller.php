<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Core\user\auth\models\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\URL;




/**
 * @OA\Info(
 *      version="1.0.0",
 *      title="SicuroBrands API's",
 *      description="SicuroBrands API Documentations",
 *      @OA\Contact(
 *          email="techteam@sicurobrands.com"
 *      ),
 *      @OA\License(
 *          name="Traefik",
 *          url="https://doc.traefik.io/traefik/"
 *      ),
 * )
 *
 * @OA\SecurityScheme(
 *       securityScheme="bearerAuth",
 *       in="header",
 *       name="bearerAuth",
 *       type="http",
 *       scheme="bearer",
 *       bearerFormat="JWT",
 *  )
 *
 * @OA\Server(
 *      url=L5_SWAGGER_CONST_HOST,
 *      description="Sicurobrands API Server"
 * )
 */

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondWithToken($token, $isLogin = false, $viaToken = false)
    {
        return response()
            ->json([
                'access_token' => $token,
                'token_type' => 'Bearer',
                'expires_in' => auth('api')->factory()->getTTL() * 60,
                'login_credential' => $isLogin ? $this->getLoginCredentials() : null
            ]);
    }

    protected function getLoginCredentials()
    {
        return URL::temporarySignedRoute('api.guest.login', Carbon::now()->addMinutes(Config::get('auth.login.expire', 60)), [
            'id' => auth()->user()->getKey(),
            'hash' => sha1(auth()->user()->email),
        ]);
    }

    /**
     * It returns a JSON response with the data, message, and HTTP status code
     *
     * @param data The data you want to return.
     * @param message The message you want to display to the user.
     * @param code HTTP status code
     *
     * @return A JSON response with the data, message, and code.
     */
    public function response($data = [], $message = 'Message success',  $code = 200)
    {
        return response()
            ->json([
                'data' => $data,
                'message' => $message,
            ], $code);
    }

    /**
     * It throws a validation exception with the given message.
     *
     * @param key The name of the field that failed validation.
     * @param message The error message to be displayed.
     */
    public function responseError($data = [])
    {
        throw ValidationException::withMessages($data);
    }

    /**
     * Generate not found Response
     * @return [type] [description]
     */
    protected function generateNotFoundResponse($title = 'error', $message = 'Not found', $code = 404)
    {
        return response()->json([
            'status' => $title,
            'description' =>  $message,
        ], $code);
    }
}
