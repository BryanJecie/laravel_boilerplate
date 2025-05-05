<?php

namespace App\Overrides;

use App\Domains\Auth\Models\User;
use Rappasoft\LaravelAuthenticationLog\Models\AuthenticationLog as AuthenticationLogOrig;

class AuthenticationLog extends AuthenticationLogOrig
{
    /**
     * @param  int  $id
     * @return mixed
     */
    public static function latestAuthentication(int $id)
    {
        return self::where('authenticatable_id', $id)->orderBy('login_at', 'desc')
            ->whereNull('logout_at')->first();
    }

    /**
     * @param  User  $user
     * @return mixed
     */
    public static function getAuthentications(User $user)
    {
        return self::where('authenticatable_id', $user->id)->whereNull('logout_at');
    }
}
