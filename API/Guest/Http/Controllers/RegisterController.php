<?php

namespace Core\Guest\Http\Controllers;


use App\Domains\Auth\Services\UserService;
use App\Http\Controllers\Controller;
use App\Rules\Captcha;
use Core\guest\auth\http\requests\StoreUserRequest;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use LangleyFoxall\LaravelNISTPasswordRules\PasswordRules;

/**
 * Class RegisterController.
 */
class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * @var UserService
     */
    protected $userService;

    /**
     * RegisterController constructor.
     *
     * @param  UserService  $userService
     */
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * The register function takes a StoreUserRequest object as input, stores the user's information in
     * the database, and returns a JSON response with the user's details.
     *
     * @param StoreUserRequest request The  parameter is an instance of the StoreUserRequest
     * class. It is used to validate and retrieve the input data from the user registration form. The
     * StoreUserRequest class contains rules and validation logic for the user registration fields such
     * as name, email, and password.
     *
     * @return a JSON response containing the user object.
     */
    public function register(StoreUserRequest $request)
    {
        $user = $this->userService->storeRegisterUser($request->only('first_name', 'last_name', 'email', 'password'));
        $message = __('Your account was successfully created. We have sent you an e-mail to confirm your account.');

        if ($user->isConfirmed()) {
            $message = __('Thank you for register to our app. please login you credentials to login page.');
        }

        return $this->response([
            'title' => 'Register Success',
            'variant' => 'success',
            'message' => $message
        ]);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users')],
            'password' => array_merge(['max:100'], PasswordRules::register($data['email'] ?? null)),
            'terms' => ['required', 'in:1'],
            'g-recaptcha-response' => ['required_if:captcha_status,true', new Captcha],
        ], [
            'terms.required' => __('You must accept the Terms & Conditions.'),
            'g-recaptcha-response.required_if' => __('validation.required', ['attribute' => 'captcha']),
        ]);
    }
}
