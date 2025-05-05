<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// User profile route
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Core Module Routes
Route::group([
    'namespace' => '\core',
    'middleware' => ['api']
], function () {
    $basePath = base_path('core');

    // Get all core module directories
    $coreDirs = array_filter(
        scandir($basePath),
        fn($dir) => !in_array($dir, ['.', '..']) && is_dir("{$basePath}/{$dir}")
    );

    foreach ($coreDirs as $dir) {
        $dirPath = "{$basePath}/{$dir}";

        if ($dir === 'guest') {
            // Guest Module Routes
            registerGuestModuleRoutes($dirPath, $dir);
        } else {
            // Authenticated Module Routes
            registerAuthModuleRoutes($dirPath, $dir);
        }
    }
});

/**
 * Register routes for guest modules
 */
function registerGuestModuleRoutes(string $dirPath, string $dir): void
{
    $guestModules = array_filter(
        scandir($dirPath),
        fn($module) => !in_array($module, ['.', '..']) && is_dir("{$dirPath}/{$module}")
    );

    foreach ($guestModules as $guestModule) {
        $routeFile = "{$dirPath}/{$guestModule}/routes/route.php";

        if (file_exists($routeFile)) {
            Route::group(['prefix' => $dir, 'middleware' => $dir], function () use ($routeFile) {
                include $routeFile;
            });
        }
    }
}

/**
 * Register routes for authenticated modules
 */
function registerAuthModuleRoutes(string $dirPath, string $dir): void
{
    // Main module routes
    $mainRouteFile = "{$dirPath}/routes/route.php";
    if (file_exists($mainRouteFile)) {
        Route::group([
            'prefix' => strtolower($dir),
            'middleware' => ['auth:sanctum', 'verified']
        ], function () use ($mainRouteFile) {
            include $mainRouteFile;
        });
    }

    // Sub-module routes
    $modules = array_filter(
        scandir($dirPath),
        fn($module) => !in_array($module, ['.', '..']) && is_dir("{$dirPath}/{$module}")
    );

    foreach ($modules as $module) {
        $moduleRouteFile = "{$dirPath}/{$module}/routes/route.php";

        if (file_exists($moduleRouteFile)) {
            Route::group(['prefix' => strtolower($dir), 'middleware' => ['auth:sanctum', 'verified']],
                function () use ($moduleRouteFile) {
                    include $moduleRouteFile;
                });
        }
    }
}
