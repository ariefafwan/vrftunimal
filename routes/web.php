<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\DosenController;
use App\Http\Controllers\Admin\KatberitaController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\ProdiController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfilController;
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

Route::get('/', [AdminController::class, 'welcome'])->name('welcome');
Route::get('/vr', [AdminController::class, 'vr'])->name('vr');
Route::resource('/contact', ContactController::class);
Route::resource('admin/dosen', DosenController::class);
Route::resource('admin/prodi', ProdiController::class);
Route::get('/sejarah', [ProfilController::class, 'sejarah'])->name('sejarah');
Route::get('/visimisi', [ProfilController::class, 'visimisi'])->name('visimisi');
Route::get('/prestasi', [ProfilController::class, 'prestasi'])->name('prestasi');
Route::get('/dosen', [ProfilController::class, 'dosen'])->name('dosen');
Route::get('/berita/{id}', [AdminController::class, 'show'])->name('show');
// Route::get('/show', [AdminController::class, 'show1'])->name('show1');

Auth::routes();
Route::middleware(['auth'])->group(function () {
    
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('admin/dashboard', [AdminController::class, 'index'])->name('admin');
    Route::resource('admin/berita', NewsController::class);
    Route::resource('admin/katberita', KatberitaController::class);
    Route::resource('admin/dosen', DosenController::class);
    Route::resource('admin/prodi', ProdiController::class);
    Route::resource('contact', ContactController::class);

});

