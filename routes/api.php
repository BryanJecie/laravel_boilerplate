<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::group(['namespace' => '\core'], routes: function () {
    $basePath = base_path('core');

    foreach (
        array_filter(
            scandir($basePath),
            fn($dir) => !in_array($dir, ['.', '..']) && is_dir("{$basePath}/{$dir}")
        ) as $dir
    ) {
        $dirPath = "{$basePath}/{$dir}";

        if ($dir === 'guest') {
            // Routes for guest modules
            foreach (
                array_filter(scandir($dirPath), fn($guestModule) => !in_array(
                        $guestModule,
                        ['.', '..']
                    ) && is_dir("{$dirPath}/{$guestModule}")) as $guestModule
            ) {
                $routeFile = "{$dirPath}/{$guestModule}/routes/route.php";

                if (file_exists($routeFile)) {
                    Route::group(['prefix' => $dir, 'middleware' => $dir], function () use ($routeFile) {
                        include $routeFile;
                    });
                }
            }
        } else {
            // Routes for authenticated modules
            $mainRouteFile = "{$dirPath}/routes/route.php";
            if (file_exists($mainRouteFile)) {
                Route::group(['prefix' => strtolower($dir), 'middleware' => 'auth:api'],
                    function () use ($mainRouteFile) {
                        include $mainRouteFile;
                    });
            }

            foreach (
                array_filter(
                    scandir($dirPath),
                    fn($module) => !in_array($module, ['.', '..']) && is_dir("{$dirPath}/{$module}")
                ) as $module
            ) {
                $moduleRouteFile = "{$dirPath}/{$module}/routes/route.php";

                if (file_exists($moduleRouteFile)) {
                    Route::group(['prefix' => strtolower($dir), 'middleware' => 'auth:api'],
                        function () use ($moduleRouteFile) {
                            include $moduleRouteFile;
                        });
                }
            }
        }
    }
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
//
//                     if (file_exists($routeFile = "{$dirPath}/{$module}/routes/route.php")) {
//                         include $routeFile;
//                     }
//                 });
//             }
//         }
//     }
// });
