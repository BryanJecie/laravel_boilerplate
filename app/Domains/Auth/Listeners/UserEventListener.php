<?php

namespace App\Domains\Auth\Listeners;

use App\Domains\Auth\Events\User\UserCreated;
use App\Domains\Auth\Events\User\UserDeleted;
use App\Domains\Auth\Events\User\UserDestroyed;
use App\Domains\Auth\Events\User\UserLoggedIn;
use App\Domains\Auth\Events\User\UserLoggedOut;
use App\Domains\Auth\Events\User\UserRestored;
use App\Domains\Auth\Events\User\UserStatusChanged;
use App\Domains\Auth\Events\User\UserUpdated;
use Carbon\Carbon;
use Illuminate\Auth\Events\PasswordReset;
use Rappasoft\LaravelAuthenticationLog\Models\AuthenticationLog;
use Rappasoft\LaravelAuthenticationLog\Notifications\NewDevice;

/**
 * Class UserEventListener.
 */
class UserEventListener
{
    /**
     * @param $event
     */
    public function onLoggedIn($event)
    {
        // Update the logging in users time & IP
        $user = $event->user;
        $ip = request()->ip();
        $userAgent = request()->userAgent();
        $known = $user->authentications()->whereIpAddress($ip)->whereUserAgent($userAgent)->whereLoginSuccessful(true)->first();
        $newUser = Carbon::parse($user->{$user->getCreatedAtColumn()})->diffInMinutes(Carbon::now()) < 1;

        $log = $user->authentications()->create([
            'ip_address' => $ip,
            'user_agent' => $userAgent,
            'login_at' => now(),
            'login_successful' => true,
            'location' => config('authentication-log.notifications.new-device.location') ? optional(geoip()->getLocation($ip))->toArray() : null,
        ]);

        $user->update([
            'last_login_at' => now(),
            'last_login_ip' => request()->getClientIp(),
        ]);

        if (!$known && !$newUser && config('authentication-log.notifications.new-device.enabled')) {
            $newDevice = config('authentication-log.notifications.new-device.template') ?? NewDevice::class;
            $user->notify(new $newDevice($log));
        }
    }

    // /**
    //  * @param $event
    //  */
    // public function onLoggedIn($event)
    // {
    //     // Update the logging in users time & IP
    // $event->user->update([
    //     'last_login_at' => now(),
    //     'last_login_ip' => request()->getClientIp(),
    // ]);
    // }

    /**
     * @param $event
     */
    public function onLoggedOut($event)
    {
        if (!$event instanceof UserLoggedOut) {
            return;
        }

        if ($event->user) {
            $user = $event->user;
            $ip = request()->ip();
            $userAgent = request()->userAgent();
            $log = $user->authentications()->whereIpAddress($ip)->whereUserAgent($userAgent)->orderByDesc('login_at')->first();

            if (!$log) {
                $log = new AuthenticationLog([
                    'ip_address' => $ip,
                    'user_agent' => $userAgent,
                ]);
            }

            $log->logout_at = now();

            $user->authentications()->save($log);
        }
    }


    /**
     * @param $event
     */
    public function onPasswordReset($event)
    {
        $event->user->update([
            'password_changed_at' => now(),
        ]);
    }

    /**
     * @param $event
     */
    public function onCreated($event)
    {
        activity('user')
            ->performedOn($event->user)
            ->withProperties([
                'user' => [
                    'type' => $event->user->type,
                    'name' => $event->user->name,
                    'email' => $event->user->email,
                    'active' => $event->user->active,
                    'email_verified_at' => $event->user->email_verified_at,
                ],
                'roles' => $event->user->roles->count() ? $event->user->roles->pluck('name')->implode(', ') : 'None',
                'permissions' => $event->user->permissions ? $event->user->permissions->pluck('description')->implode(', ') : 'None',
            ])
            ->log(':causer.name created user :subject.name with roles: :properties.roles and permissions: :properties.permissions');
    }

    /**
     * @param $event
     */
    public function onUpdated($event)
    {
        activity('user')
            ->performedOn($event->user)
            ->withProperties([
                'user' => [
                    'type' => $event->user->type,
                    'name' => $event->user->name,
                    'email' => $event->user->email,
                ],
                'roles' => $event->user->roles->count() ? $event->user->roles->pluck('name')->implode(', ') : 'None',
                'permissions' => $event->user->permissions ? $event->user->permissions->pluck('description')->implode(', ') : 'None',
            ])
            ->log(':causer.name updated user :subject.name with roles: :properties.roles and permissions: :properties.permissions');
    }

    /**
     * @param $event
     */
    public function onDeleted($event)
    {
        activity('user')
            ->performedOn($event->user)
            ->log(':causer.name deleted user :subject.name');
    }

    /**
     * @param $event
     */
    public function onRestored($event)
    {
        activity('user')
            ->performedOn($event->user)
            ->log(':causer.name restored user :subject.name');
    }

    /**
     * @param $event
     */
    public function onDestroyed($event)
    {
        activity('user')
            ->performedOn($event->user)
            ->log(':causer.name permanently deleted user :subject.name');
    }

    /**
     * @param $event
     */
    public function onStatusChanged($event)
    {
        activity('user')
            ->performedOn($event->user)
            ->log(':causer.name ' . ($event->status === 0 ? 'deactivated' : 'reactivated') . ' user :subject.name');
    }

    /**
     * Register the listeners for the subscriber.
     *
     * @param  \Illuminate\Events\Dispatcher  $events
     */
    public function subscribe($events)
    {
        $events->listen(
            UserLoggedIn::class,
            'App\Domains\Auth\Listeners\UserEventListener@onLoggedIn'
        );

        $events->listen(
            PasswordReset::class,
            'App\Domains\Auth\Listeners\UserEventListener@onPasswordReset'
        );

        $events->listen(
            UserCreated::class,
            'App\Domains\Auth\Listeners\UserEventListener@onCreated'
        );

        $events->listen(
            UserUpdated::class,
            'App\Domains\Auth\Listeners\UserEventListener@onUpdated'
        );

        $events->listen(
            UserDeleted::class,
            'App\Domains\Auth\Listeners\UserEventListener@onDeleted'
        );

        $events->listen(
            UserRestored::class,
            'App\Domains\Auth\Listeners\UserEventListener@onRestored'
        );

        $events->listen(
            UserDestroyed::class,
            'App\Domains\Auth\Listeners\UserEventListener@onDestroyed'
        );

        $events->listen(
            UserStatusChanged::class,
            'App\Domains\Auth\Listeners\UserEventListener@onStatusChanged'
        );

        $events->listen(
            UserLoggedOut::class,
            'App\Domains\Auth\Listeners\UserEventListener@onLoggedOut'
        );
    }
}
