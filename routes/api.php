<?php

use App\Domains\Biometric\Http\Controllers\API\ApiBiometricController;
use Illuminate\Http\Request;

use function PHPUnit\Framework\directoryExists;

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

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

$guestPath = 'Guest';

Route::group(['namespace' => '\app'], function () {
    foreach (scandir($basePath = base_path('app/Domains')) as $directory) {
        if (file_exists($apiPath = "{$basePath}/{$directory}/Routes/api.php")) {
            include $apiPath;
        }
    }
});


Route::group(['namespace' => '\API'], function () {
    foreach (scandir($basePath = base_path('API')) as $dir) {
        $dirPath = "{$basePath}/{$dir}";
        if ($dir === 'guest') {
            foreach (scandir($dirPath) as $guestModule) {
                Route::group(['prefix' => $dir, 'middleware' => $dir], function () use ($dirPath, $guestModule) {
                    if (file_exists($routeFile = "{$dirPath}/routes/route.php")) {
                        include $routeFile;
                    }

                    if (file_exists($routeFile = "{$dirPath}/{$guestModule}/routes/route.php")) {
                        include $routeFile;
                    }
                });
            }
        } else {
            foreach (scandir($dirPath) as $module) {
                Route::group(['prefix' => $dir, 'middleware' => 'auth:api'], function () use ($dirPath, $module) {
                    if (file_exists($routeFile = "{$dirPath}/routes/route.php")) {
                        include $routeFile;
                    }

                    if (file_exists($routeFile = "{$dirPath}/{$module}/routes/route.php")) {
                        include $routeFile;
                    }
                });
            }
        }
    }
});


// Route::group(['namespace' => '\API'], function () use ($guestPath) {
//     foreach (scandir($basePath = base_path('API')) as $childPath) {

//         $directory = "{$basePath}/{$childPath}";
//         $middleWare = 'auth:api';
//         $toLowerString = strtolower($childPath);

//         if ($childPath === $guestPath) {
//             // $middleWare = $toLowerString;

//             Route::group(['prefix' => $toLowerString, 'middleware' => $middleWare], function () use ($apiFile) {
//                 include $apiFile;
//             });
//         }

//         if (file_exists($apiFile = "{$directory}/routes/api.php")) {
//             include $apiFile;
//             // dd("{$directory}/routes/api.php");
//             // Route::group(['prefix' => $toLowerString, 'middleware' => $middleWare], function () use ($apiFile) {
//             //     include $apiFile;
//             // });
//         }
//     }
// });
