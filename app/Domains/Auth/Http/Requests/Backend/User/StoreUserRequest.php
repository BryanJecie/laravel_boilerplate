<?php

namespace App\Domains\Auth\Http\Requests\Backend\User;

use App\Domains\Auth\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\Rule;

/**
 * Class StoreUserRequest.
 */
class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        // dd($this->all());


        return [
            'type' => ['required', Rule::in([User::TYPE_ADMIN, User::TYPE_USER])],
            'name' => ['required', 'max:100'],
            'email' => ['required', 'max:255', 'email', Rule::unique('mysql_user.users')],
            'password' => [
                'max:100', 'required', 'confirmed', 'string', Password::min(6)->mixedCase()->letters()
            ],
            'active' => ['sometimes', 'in:1'],
            // 'email_verified' => ['sometimes', 'in:1'],
            // 'send_confirmation_email' => ['sometimes', 'in:1'],
            'roles' => ['sometimes', 'array'],
            'roles.*' => [Rule::exists('mysql_user.roles', 'id')->where('type', $this->type)],
            'permissions' => ['sometimes', 'array'],
            'permissions.*' => [Rule::exists('mysql_user.permissions', 'id')->where('type', $this->type)],
        ];
    }

    /**
     * @return array
     */
    public function messages()
    {
        return [
            'roles.*.exists' => __('One or more roles were not found or are not allowed to be associated with this user type.'),
            'permissions.*.exists' => __('One or more permissions were not found or are not allowed to be associated with this user type.'),
        ];
    }
}
