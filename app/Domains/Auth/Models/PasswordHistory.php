<?php

namespace App\Domains\Auth\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class PasswordHistory.
 */
class PasswordHistory extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['password'];
    protected $connection = 'mysql_user';

    public function __construct(array $attributes = array())
    {
        /**
         * The database table used by the model.
         *
         * @var string
         */
        $this->table = config('boilerplate.database.admin_user_db') . '.password_histories';
        parent::__construct($attributes);
    }
}
