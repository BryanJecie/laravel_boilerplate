<?php

namespace App\Domains\Auth\Models;

use App\Domains\Auth\Models\Traits\Attribute\RoleAttribute;
use App\Domains\Auth\Models\Traits\Method\RoleMethod;
use App\Domains\Auth\Models\Traits\Scope\RoleScope;
use Database\Factories\RoleFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Permission\Models\Role as SpatieRole;

/**
 * Class Role.
 */
class Role extends SpatieRole
{
    use HasFactory,
        RoleAttribute,
        RoleMethod,
        RoleScope;

    /**
     * @var string[]
     */
    protected $with = [
        'permissions',
    ];

    protected $connection = 'mysql_user';

    public function __construct(array $attributes = array())
    {
        $this->table = config('boilerplate.database.admin_user_db') . '.roles';
        parent::__construct($attributes);
    }

    /**
     * Create a new factory instance for the model.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    protected static function newFactory()
    {
        return RoleFactory::new();
    }
}
