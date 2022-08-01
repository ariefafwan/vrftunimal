<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\DosenController;
use App\Http\Controllers\Admin\KatberitaController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\ProdiController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [AdminController::class, 'welcome']);

Auth::routes();
Route::middleware(['auth'])->group(function () {
    
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('admin/dashboard', [AdminController::class, 'index'])->name('admin');
    Route::resource('admin/berita', NewsController::class);
    Route::resource('admin/katberita', KatberitaController::class);
    Route::resource('admin/dosen', DosenController::class);
    Route::resource('admin/prodi', ProdiController::class);

});

