<?php

// use Core\guest\http\controllers\RegisterController;
// use Core\guest\http\controllers\SocialController;
// use Core\guest\http\controllers\VerificationController;

use Core\Guest\Http\Controllers\LoginController;

Route::post('/login', [LoginController::class, 'login'])->name('api.guest.login');
// Route::post('/register', [RegisterController::class, 'register']);
// Route::post('/login/{provider}', [SocialController::class, 'callback']);


// Route::group(['middleware' => 'password.expires'], function () {
//     Route::get('email/verify/{id}/{hash}', [VerificationController::class, 'verify'])
//         ->name('api.verification.verify')
//         ->middleware(['throttle:6,1']);

//     Route::post('email/resend', [VerificationController::class, 'resend'])
//         ->name('api.verification.resend')
//         ->middleware('throttle:6,1');
// });
