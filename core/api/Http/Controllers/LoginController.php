<?php

namespace Core\Guest\Http\Controllers;

use App\Domains\Auth\Events\User\UserLoggedIn;
use App\Domains\Auth\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Tymon\JWTAuth\Exceptions\JWTException;

use JWTAuth;
use Tymon\JWTAuth\JWT;


class LoginController extends Controller
{
    /**
     * @var JWT $jwt
     */
    protected $jwt;

    /**
     * The __construct() function is a special function that is automatically called when an object is
     * created
     *
     * @param JWT jwt The JWT class that will be used to decode the token.
     */
    public function __construct(JWT $jwt)
    {
        $this->jwt = $jwt;
    }


    public function login(Request $request)
    {
        try {

            if ($request->viaToken) {

                if (!$token = $this->validateToken($request)) {
                    throw ValidationException::withMessages(['invalid_credentials' => __('auth.failed')]);
                }

                return $this->respondWithToken($token, false, true);
            }

            $credentials = $request->only('email', 'password');

            // attempt to verify the credentials and create a token for the user
            if (!$token = JWTAuth::attempt($credentials)) {
                throw ValidationException::withMessages(['invalid_credentials' => __('auth.failed')]);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            throw ValidationException::withMessages(['error' => $e->getMessage()]);
        }

        $this->authenticated($request, auth()->user());

        return $this->respondWithToken($token, true);
    }

    /**
     * If the user is logged in, return a token for that user. If the user is not logged in, but has a
     * valid token, return a token for that user. If the user is not logged in and does not have a valid
     * token, return null
     *
     * @param request The request object
     *
     * @return A JWT token
     */
    protected function validateToken(Request $request)
    {
        $request->validate([
            'expires' => ['required'],
            'signature' => ['required'],
            'access_token' => ['required', 'string'],
        ]);

        if ($request->application && !in_array($request->application, config('boilerplate.softwares'))) {
            return null;
        }

        if (!$user = User::findOrFail($request->id)) {
            return null;
        }

        if (!hash_equals((string) $request->hash, sha1($user->email))) {
            return null;
        }

        return $this->getAuthenticateToken(
            $request,
            JWTAuth::parseToken()->authenticate($request->access_token)
        );
    }

    protected function getAuthenticateToken(Request $request, User $user)
    {
        if (!$user) {
            $user = JWTAuth::parseToken()->authenticate();
        }

        // This is checking if the user has a valid token.
        // If they do, it will return a token for that user.
        if (!$user && $this->jwt->setRequest($request)->getToken() && $this->jwt->check()) {;
            $user = User::findOrFail($this->jwt->payload()->get('sub'));
            if (!$user) {
                throw ValidationException::withMessages(['invalid_credentials' => __('auth.failed')]);
            }
        }

        return JWTAuth::fromUser($user);
    }

    /**
     * If the user is not confirmed, log them out and throw an error
     *
     * @param Request request The request object.
     * @param user The user model
     *
     * @return The authenticated method is being returned.
     */
    protected function authenticated(Request $request, $user)
    {
        if (!$user->isActive()) {
            auth()->logout();
            throw ValidationException::withMessages(['invalid_credentials' => 'Your account has been deactivated.']);
        }

        event(new UserLoggedIn($user));

        if (config('boilerplate.access.user.single_login')) {
            auth()->logoutOtherDevices($request->password);
        }

        // if (!$user->isConfirmed()) {
        //     auth()->logout();

        //     // If the user is pending (account approval is on)
        //     if ($user->isPending()) {
        //         throw ValidationException::withMessages(['invalid_credentials' => 'Your account is currently pending approval']);
        //     }

        //     // Otherwise see if they want to resent the confirmation e-mail
        //     throw ValidationException::withMessages([
        //         'not_confirm' => route('api.verification.resend', e($user->{$user->getUuidName()}))
        //     ]);
        // }

        // if (!$user->isActive() && $user->isConfirmed()) {
        //     auth()->logout();

        //     throw ValidationException::withMessages(['invalid_credentials' => __('Your account has been deactivated.')]);
        // }

        // $user->authenicationLogout();

        // event(new UserLoggedIn($user));

        // if (config('boilerplate.access.user.single_login')) {
        //     auth()->logoutOtherDevices($request->password);
        // }
    }
}
