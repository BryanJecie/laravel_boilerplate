<?php

use App\Http\Controllers\Backend\DashboardController;
use Tabuna\Breadcrumbs\Trail;
use Illuminate\Support\Facades\Route;

// All route names are prefixed with 'admin.'.
Route::redirect('/', '/admin/dashboard', 301);
Route::get('dashboard', [DashboardController::class, 'index'])
    ->name('dashboard')
    ->breadcrumbs(function (Trail $trail) {
        $trail->push(__('Home'), route('admin.dashboard'));
    });


Route::group(['namespace' => '\app'], function () {
    foreach (scandir($basePath = base_path('app/Domains')) as $directory) {
        if (file_exists($apiPath = "{$basePath}/{$directory}/Routes/web.php")) {
            include $apiPath;
        }
    }
});
