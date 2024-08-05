<?php

namespace App\Domains\Auth\Models;

use App\Domains\Auth\Models\Traits\Relationship\PermissionRelationship;
use App\Domains\Auth\Models\Traits\Scope\PermissionScope;
use Spatie\Permission\Models\Permission as SpatiePermission;

/**
 * Class Permission.
 */
class Permission extends SpatiePermission
{
    use PermissionRelationship,
        PermissionScope;

    protected $connection = 'mysql_user';

    public function __construct(array $attributes = array())
    {
        $this->table = config('boilerplate.database.admin_user_db') . '.permissions';
        parent::__construct($attributes);
    }
}
