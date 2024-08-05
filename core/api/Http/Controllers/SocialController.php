<?php

namespace Core\Guest\Http\Controllers;


use App\Domains\Auth\Events\User\UserLoggedIn;
use App\Domains\Auth\Models\User;
use App\Domains\Auth\Services\UserService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use JWTAuth;
use Socialite;


/**
 * @group User Authentication
 *
 * APIs for Login User with provider (Google, Facebook)
 *
 */
class SocialController extends Controller
{
    /**
     * @param $provider
     * @param  UserService  $userService
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \App\Exceptions\GeneralException
     */
    public function callback($provider, Request $request, UserService $userService)
    {
        $providerUser = $this->getProviderUser($provider, $request->access_token, $request->scope);

        $userExist = User::whereEmail($providerUser->user['email'])->first();

        $user = $userService->findOrCreateProvider($providerUser->user, $request, $provider);

        if (!$user->isActive()) {
            auth()->logout();

            throw ValidationException::withMessages(['invalid_credentials' => __('Your account has been deactivated.')]);
        }

        auth()->login($user);

        event(new UserLoggedIn($user));

        return $this->respondWithToken(JWTAuth::fromUser($user), true, false, $userExist ? true : false);
    }

    /**
     * The function "getProviderUser" returns the user information from a social media provider using
     * the given token and scopes.
     *
     * @param provider The provider parameter is the name of the social media platform or service that
     * you want to authenticate with. Examples include "facebook", "google", "twitter", etc.
     * @param token The token parameter is the access token obtained from the provider. It is used to
     * authenticate and authorize the user's access to their account on the provider's platform.
     * @param scopes The "scopes" parameter is an optional parameter that allows you to specify the
     * permissions or access levels that your application requires from the user's social media account.
     * Scopes can vary depending on the social media platform you are integrating with. For example, if
     * you are integrating with Facebook, you might specify scopes
     *
     * @return the user object obtained from the Socialite driver for the specified provider, token, and
     * scopes.
     */
    protected function getProviderUser($provider, $token, $scopes = [])
    {
        return Socialite::driver($provider)
            ->scopes($scopes)
            ->userFromToken($token);
    }
}
