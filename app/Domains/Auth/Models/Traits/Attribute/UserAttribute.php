<?php

namespace App\Domains\Auth\Models\Traits\Attribute;

use App\Overrides\AuthenticationLog;
use Core\settings\companies\models\CompanyUser;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Hash;

/**
 * Trait UserAttribute.
 */
trait UserAttribute
{
    /**
     * @param $password
     */
    public function setPasswordAttribute($password): void
    {
        // If password was accidentally passed in already hashed, try not to double hash it
        // Note: Password Histories are logged from the \App\Domains\Auth\Observer\UserObserver class
        $this->attributes['password'] =
            (strlen($password) === 60 && preg_match('/^\$2y\$/', $password)) ||
            (strlen($password) === 95 && preg_match('/^\$argon2i\$/', $password)) ?
            $password :
            Hash::make($password);
    }

    /**
     * @return mixed
     */
    public function getAvatarAttribute()
    {
        return $this->getAvatar();
    }

    /**
     * @return string
     */
    public function getPermissionsLabelAttribute()
    {
        if ($this->hasAllAccess()) {
            return 'All';
        }

        if (!$this->permissions->count()) {
            return 'None';
        }

        return collect($this->getPermissionDescriptions())
            ->implode('<br/>');
    }

    /**
     * @return string
     */
    public function getRolesLabelAttribute()
    {
        if ($this->hasAllAccess()) {
            return 'All';
        }

        if (!$this->roles->count()) {
            return 'None';
        }

        return collect($this->getRoleNames())
            ->each(function ($role) {
                return ucwords($role);
            })
            ->implode('<br/>');
    }

    public function getIsOnlineAttribute()
    {
        $latestAuthentication = AuthenticationLog::latestAuthentication($this->id);

        if (!$latestAuthentication) {
            return false;
        }

        if ($latestAuthentication->logout_at) {
            return false;
        }

        return true;
    }

    public function loggedOut(): Attribute
    {
        return new Attribute(function () {
            return $this->latestAuthentication()->first()?->logout_at ? true : false;
        });
    }

    public  function fullName(): Attribute
    {
        return new Attribute(function () {
            $firstName = $this->first_name ?? "";
            $lastName = $this->last_name ?? "";
            return "{$firstName} {$lastName}";
        });
    }

    public function hasCompany(): Attribute
    {
        return new Attribute(function () {
            $company = CompanyUser::where('user_id', $this->id)->first();
            return $company?->company;
        });
    }
}
