<?php


namespace Core\Guest\Http\Requests;

use App\Domains\Auth\Models\User;
use App\Rules\Captcha;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use LangleyFoxall\LaravelNISTPasswordRules\PasswordRules;

use Illuminate\Validation\Rules\Password;

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
        return [
            'first_name' => ['required', 'max:100'],
            'last_name' => ['required', 'max:100'],
            'email' => ['required', 'max:255', 'email', Rule::unique('users')],
            'password' => [
                'required',
                'string',
                Password::min(6)
                    // ->mixedCase()
                    ->numbers(),
                // ->uncompromised(),
                'confirmed'
            ],
            'terms' => ['required', 'in:1'],
            'g-recaptcha-response' => ['required_if:captcha_status,true', new Captcha],
        ];
    }

    /**
     * @return array
     */
    public function messages()
    {
        return [
            'terms.required' => __('You must accept the Terms & Conditions.'),
            'g-recaptcha-response.required_if' => __('validation.required', ['attribute' => 'captcha']),
            'roles.*.exists' => __('One or more roles were not found or are not allowed to be associated with this user type.'),
            'permissions.*.exists' => __('One or more permissions were not found or are not allowed to be associated with this user type.'),
        ];
    }
}
