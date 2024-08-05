<?php

namespace Core\Guest\Http\Requests;


use App\Domains\Auth\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class AccountValidateRequest extends FormRequest
{
    public function authorize()
    {
        $user = User::findOrFail($this->route('id'));

        if (!hash_equals((string) $this->route('hash'), sha1($user->email))) {
            return false;
        }

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
            'expires' => ['required'],
            'signature' => ['required'],
            'access_token' => ['required', 'string'],
        ];
    }
}
