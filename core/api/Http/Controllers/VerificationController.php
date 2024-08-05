<?php

namespace Core\Guest\Http\Controllers;

use App\Domains\Auth\Models\User;
use App\Http\Controllers\Controller;
use Auth;
use Core\guest\auth\http\requests\EmailVerificationRequest;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

/**
 * Class VerificationController.
 */
class VerificationController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Email Verification Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling email verification for any
    | user that recently registered with the application. Emails may also
    | be re-sent if the user didn't receive the original email message.
    |
    */

    use VerifiesEmails;

    /**
     * The function verifies the email of a user, updates their account status, and returns a response
     * message.
     *
     * @param EmailVerificationRequest request The  parameter is an instance of the
     * EmailVerificationRequest class. It is used to retrieve the user's ID from the route.
     *
     * @return a response with a title, variant, and message.
     */
    public function verify(EmailVerificationRequest $request)
    {
        $user = User::findOrFail($request->route('id'));
        Auth::login($user);

        if (!$user) {
            throw ValidationException::withMessages(['error' =>  __('No user found!')]);
        }

        if ($user->isVerified()) {
            throw ValidationException::withMessages(['error' =>  __('Your account is already verified!')]);
        }

        if (!$this->toVerify($request)) {
            throw ValidationException::withMessages(['error' =>  __('Error found!')]);
            return;
        }

        if (!$user->isConfirmed()) {
            $user->confirmed = 1;
        }

        if (!$user->isActive()) {
            $user->active = 1;
        }

        $user->save();
        auth()->logout();

        return $this->response([
            'title' => 'Account Verified',
            'variant' => 'success',
            'message' => __('Your account has been successfully verified. Login your account here.')
        ]);
    }


    /**
     * The function checks if a user's email is verified and performs necessary actions if it is not.
     *
     * @param request The `` parameter is an instance of the `Illuminate\Http\Request` class.
     * It represents an incoming HTTP request and contains information such as the request method,
     * headers, and input data. In this context, it is used to retrieve route parameters and the
     * authenticated user.
     *
     * @return either a JsonResponse with an empty array and a status code of 204 if the request wants
     * JSON, or a redirect to the redirect path specified in the code. If none of these conditions are
     * met, it returns true.
     */
    protected function toVerify($request)
    {
        if (!hash_equals((string) $request->route('id'), (string) $request->user()->getKey())) {
            throw new AuthorizationException;
        }

        if (!hash_equals((string) $request->route('hash'), sha1($request->user()->getEmailForVerification()))) {
            throw new AuthorizationException;
        }

        if ($request->user()->hasVerifiedEmail()) {
            return $request->wantsJson()
                ? new JsonResponse([], 204)
                : redirect($this->redirectPath());
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        if ($response = $this->verified($request)) {
            return $response;
        }

        return true;
    }

    /**
     * Resend the email verification notification.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse
     */
    public function resend(Request $request)
    {
        $requestKeys = collect($request->all())->keys();

        if (sizeof($requestKeys) === 0) {
            throw ValidationException::withMessages(['invalid_credentials' =>  __('User not found!')]);
        }

        $request->setUserResolver(function () use ($requestKeys) {
            return User::uuid($requestKeys[0])
                ->first();
        });

        if ($request->user()->hasVerifiedEmail()) {
            throw ValidationException::withMessages(['invalid_credentials' =>  __('Your account is already verified!')]);
        }

        $request->user()->sendEmailVerificationNotification();

        return $this->response(
            true,
            __('We have sent you an e-mail to confirm your account.')
        );
    }
}
