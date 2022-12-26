<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AkreditasiController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\DosenController;
use App\Http\Controllers\Admin\DownloadController;
use App\Http\Controllers\Admin\KalenderAkademikController;
use App\Http\Controllers\Admin\KatberitaController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\PanduanController;
use App\Http\Controllers\Admin\PimpinanController;
use App\Http\Controllers\Admin\PrestasiController;
use App\Http\Controllers\Admin\ProdiController;
use App\Http\Controllers\Admin\SejarahController;
use App\Http\Controllers\Admin\VisiMisiController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Konten\ShowBeritaController;
use App\Http\Controllers\Konten\ShowDosenController;
use App\Http\Controllers\Konten\ShowDownloadController;
use App\Http\Controllers\Konten\ShowPrestasiController;
use App\Http\Controllers\Konten\ShowSejarahController;
use App\Http\Controllers\Konten\ShowVisiController;
use App\Http\Controllers\ProfilController;
use App\Models\Kalender;
use App\Models\Pimpinan;
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

Route::get('/', [ProfilController::class, 'welcome'])->name('welcome');
Route::get('/vr', [ProfilController::class, 'vr'])->name('vr');
Route::resource('/contact', ContactController::class);
Route::resource('admin/dosen', DosenController::class);
Route::resource('admin/prodi', ProdiController::class);
Route::get('/sejarah', [ProfilController::class, 'sejarah'])->name('sejarah');
Route::get('/visimisi', [ProfilController::class, 'visimisi'])->name('visimisi');
Route::get('/prestasi', [ProfilController::class, 'prestasi'])->name('prestasi');
Route::get('/download', [ProfilController::class, 'download'])->name('download');
Route::get('/pimpinan', [ProfilController::class, 'pimpinan'])->name('pimpinan');
Route::get('/beritaall', [ProfilController::class, 'berita'])->name('beritaall');
Route::get('/kalender', [ProfilController::class, 'kalender'])->name('kalender');
Route::get('/akreditasi', [ProfilController::class, 'akreditasi'])->name('akreditasi');
Route::get('/berita/{id}', [AdminController::class, 'show'])->name('show');
//konten dosen prodi
Route::get('/dosentsipil', [ShowDosenController::class, 'tsipil'])->name('tsipil');
Route::get('/dosentmesin', [ShowDosenController::class, 'tmesin'])->name('tmesin');
Route::get('/dosentkimia', [ShowDosenController::class, 'tkimia'])->name('tkimia');
Route::get('/dosentindustri', [ShowDosenController::class, 'tindustri'])->name('tindustri');
Route::get('/dosentelektro', [ShowDosenController::class, 'telektro'])->name('telektro');
Route::get('/dosentinformatika', [ShowDosenController::class, 'tinformatika'])->name('tinformatika');
Route::get('/dosentarsitektur', [ShowDosenController::class, 'tarsitektur'])->name('tarsitektur');
Route::get('/dosensinformasi', [ShowDosenController::class, 'sisteminformasi'])->name('sinformasi');
Route::get('/dosentmaterial', [ShowDosenController::class, 'tmaterial'])->name('tmaterial');
Route::get('/dosentlogistik', [ShowDosenController::class, 'tlogistik'])->name('tlogistik');
//konten sejarah prodi
Route::get('/sejarahtsipil', [ShowSejarahController::class, 'tsipil'])->name('sejarahtsipil');
Route::get('/sejarahtmesin', [ShowSejarahController::class, 'tmesin'])->name('sejarahtmesin');
Route::get('/sejarahtkimia', [ShowSejarahController::class, 'tkimia'])->name('sejarahtkimia');
Route::get('/sejarahtindustri', [ShowSejarahController::class, 'tindustri'])->name('sejarahtindustri');
Route::get('/sejarahtelektro', [ShowSejarahController::class, 'telektro'])->name('sejarahtelektro');
Route::get('/sejarahtinformatika', [ShowSejarahController::class, 'tinformatika'])->name('sejarahtinformatika');
Route::get('/sejarahtarsitektur', [ShowSejarahController::class, 'tarsitektur'])->name('sejarahtarsitektur');
Route::get('/sejarahsinformasi', [ShowSejarahController::class, 'sisteminformasi'])->name('sejarahsinformasi');
Route::get('/sejarahtmaterial', [ShowSejarahController::class, 'tmaterial'])->name('sejarahtmaterial');
Route::get('/sejarahtlogistik', [ShowSejarahController::class, 'tlogistik'])->name('sejarahtlogistik');
//konten visimisi prodi
Route::get('/visimisitsipil', [ShowVisiController::class, 'tsipil'])->name('visimisitsipil');
Route::get('/visimisitmesin', [ShowVisiController::class, 'tmesin'])->name('visimisitmesin');
Route::get('/visimisitkimia', [ShowVisiController::class, 'tkimia'])->name('visimisitkimia');
Route::get('/visimisitindustri', [ShowVisiController::class, 'tindustri'])->name('visimisitindustri');
Route::get('/visimisitelektro', [ShowVisiController::class, 'telektro'])->name('visimisitelektro');
Route::get('/visimisitinformatika', [ShowVisiController::class, 'tinformatika'])->name('visimisitinformatika');
Route::get('/visimisitarsitektur', [ShowVisiController::class, 'tarsitektur'])->name('visimisitarsitektur');
Route::get('/visimisisinformasi', [ShowVisiController::class, 'sisteminformasi'])->name('visimisisinformasi');
Route::get('/visimisitmaterial', [ShowVisiController::class, 'tmaterial'])->name('visimisitmaterial');
Route::get('/visimisitlogistik', [ShowVisiController::class, 'tlogistik'])->name('visimisitlogistik');
//konten prestasi prodi
Route::get('/prestasitsipil', [ShowPrestasiController::class, 'tsipil'])->name('prestasitsipil');
Route::get('/prestasitmesin', [ShowPrestasiController::class, 'tmesin'])->name('prestasitmesin');
Route::get('/prestasitkimia', [ShowPrestasiController::class, 'tkimia'])->name('prestasitkimia');
Route::get('/prestasitindustri', [ShowPrestasiController::class, 'tindustri'])->name('prestasitindustri');
Route::get('/prestasitelektro', [ShowPrestasiController::class, 'telektro'])->name('prestasitelektro');
Route::get('/prestasitinformatika', [ShowPrestasiController::class, 'tinformatika'])->name('prestasitinformatika');
Route::get('/prestasitarsitektur', [ShowPrestasiController::class, 'tarsitektur'])->name('prestasitarsitektur');
Route::get('/prestasisinformasi', [ShowPrestasiController::class, 'sisteminformasi'])->name('prestasisinformasi');
Route::get('/prestasitmaterial', [ShowPrestasiController::class, 'tmaterial'])->name('prestasitmaterial');
Route::get('/prestasitlogistik', [ShowPrestasiController::class, 'tlogistik'])->name('prestasitlogistik');
//konten downloads prodi
Route::get('/downloadtsipil', [ShowDownloadController::class, 'tsipil'])->name('downloadtsipil');
Route::get('/downloadtmesin', [ShowDownloadController::class, 'tmesin'])->name('downloadtmesin');
Route::get('/downloadtkimia', [ShowDownloadController::class, 'tkimia'])->name('downloadtkimia');
Route::get('/downloadtindustri', [ShowDownloadController::class, 'tindustri'])->name('downloadtindustri');
Route::get('/downloadtelektro', [ShowDownloadController::class, 'telektro'])->name('downloadtelektro');
Route::get('/downloadtinformatika', [ShowDownloadController::class, 'tinformatika'])->name('downloadtinformatika');
Route::get('/downloadtarsitektur', [ShowDownloadController::class, 'tarsitektur'])->name('downloadtarsitektur');
Route::get('/downloadsinformasi', [ShowDownloadController::class, 'sisteminformasi'])->name('downloadsinformasi');
Route::get('/downloadtmaterial', [ShowDownloadController::class, 'tmaterial'])->name('downloadtmaterial');
Route::get('/downloadtlogistik', [ShowDownloadController::class, 'tlogistik'])->name('downloadtlogistik');
//konten berita prodi
Route::get('/beritatsipil', [ShowBeritaController::class, 'tsipil'])->name('beritatsipil');
Route::get('/beritatmesin', [ShowBeritaController::class, 'tmesin'])->name('beritatmesin');
Route::get('/beritatkimia', [ShowBeritaController::class, 'tkimia'])->name('beritatkimia');
Route::get('/beritatindustri', [ShowBeritaController::class, 'tindustri'])->name('beritatindustri');
Route::get('/beritatelektro', [ShowBeritaController::class, 'telektro'])->name('beritatelektro');
Route::get('/beritatinformatika', [ShowBeritaController::class, 'tinformatika'])->name('beritatinformatika');
Route::get('/beritatarsitektur', [ShowBeritaController::class, 'tarsitektur'])->name('beritatarsitektur');
Route::get('/beritasinformasi', [ShowBeritaController::class, 'sisteminformasi'])->name('beritasinformasi');
Route::get('/beritatmaterial', [ShowBeritaController::class, 'tmaterial'])->name('beritatmaterial');
Route::get('/beritatlogistik', [ShowBeritaController::class, 'tlogistik'])->name('beritatlogistik');


Auth::routes();
Route::middleware(['auth'])->group(function () {
    
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('admin/dashboard', [AdminController::class, 'index'])->name('admin');
    Route::resource('admin/berita', NewsController::class);
    Route::resource('admin/katberita', KatberitaController::class);
    Route::resource('admin/dosen', DosenController::class);
    Route::get('/showdosen', [AdminController::class, 'showdosen'])->name('showdosen');
    Route::resource('admin/prodi', ProdiController::class);
    Route::resource('/admin/sejarahprodi', SejarahController::class);
    Route::get('/admin/sejarahfakultas', [AdminController::class, 'sejarahfakultas'])->name('sejarahfakultas');
    Route::resource('admin/visimisiprodi', VisiMisiController::class);
    Route::get('/admin/visimisifakultas', [AdminController::class, 'visimisifakultas'])->name('visimisifakultas');
    Route::resource('admin/prestasiprodi', PrestasiController::class);
    Route::resource('admin/download', DownloadController::class);
    Route::resource('admin/pimpinan', PimpinanController::class);
    Route::resource('admin/kalenderakademik', KalenderAkademikController::class);
    Route::resource('admin/akred', AkreditasiController::class);
});

