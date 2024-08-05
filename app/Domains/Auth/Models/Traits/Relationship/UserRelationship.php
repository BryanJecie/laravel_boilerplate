<?php

namespace App\Domains\Auth\Models\Traits\Relationship;

use App\Domains\Auth\Models\PasswordHistory;
use Core\settings\companies\models\CompanyUser;

/**
 * Class UserRelationship.
 */
trait UserRelationship
{
    /**
     * @return mixed
     */
    public function passwordHistories()
    {
        return $this->morphMany(PasswordHistory::class, 'model');
    }

    public function companyUser()
    {
        return $this->setConnection('mysql')->hasOne(CompanyUser::class, 'user_id')->with('company');
    }
}
