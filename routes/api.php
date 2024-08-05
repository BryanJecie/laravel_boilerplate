<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// Route::group(['namespace' => '\core'], function () {
//     foreach (scandir($basePath = base_path('core')) as $dir) {
//         $dirPath = "{$basePath}/{$dir}";
//         if ($dir === 'guest') {
//             foreach (scandir($dirPath) as $guestModule) {
//                 Route::group(['prefix' => $dir, 'middleware' => $dir], function () use ($dirPath, $guestModule) {
//                     if (file_exists($routeFile = "{$dirPath}/{$guestModule}/routes/route.php")) {
//                         include $routeFile;
//                     }
//                 });
//             }
//         } else {
//             foreach (scandir($dirPath) as $module) {
//                 Route::group(['prefix' => strtolower($dir), 'middleware' => 'auth:api'], function () use ($dirPath, $module) {
//                     if (file_exists($routeFile = "{$dirPath}/routes/route.php")) {
//                         include $routeFile;
//                     }

//                     if (file_exists($routeFile = "{$dirPath}/{$module}/routes/route.php")) {
//                         include $routeFile;
//                     }
//                 });
//             }
//         }
//     }
// });
