<?php

namespace App\Http\Controllers\Admin;

use App\Models\Berita;
use App\Models\Dosen;
use App\Models\Hmj;
use App\Models\Konten;
use App\Models\Prestasi;
use App\Models\Prodi;
use App\Models\Sejarah;
use App\Models\User;
use App\Models\Visimisi;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Laravel\Ui\Presets\Preset;

use function GuzzleHttp\Promise\all;

class AdminController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $page = "Dasboard Admin";
        return view('admin.dashboard', compact('user', 'page'));
    }

    public function welcome()
    {
        $berita = Berita::all();
        $page = 'Beranda';
        return view('index', compact('berita', 'page'));
    }

    public function vr()
    {
        $berita = Berita::all();
        $dosen = Dosen::all();
        $prodi = Prodi::all();
        $visimisi = Visimisi::all();
        $sejarah = Sejarah::all();
        $prestasi = Prestasi::all();
        $konten = Konten::all();
        $hmj = Hmj::all();
        $page = "Virtual Tour";
        return view('vr', compact('berita','dosen', 'prodi', 'visimisi', 'page','sejarah', 'prestasi', 'konten','hmj'));
    }

    public function show($id)
    {
        $news = Berita::find($id);
        $berita = Berita::all();
        $judul = Berita::find($id)->title;
        return view('admin.berita.show', compact('berita','news', 'judul'));
    }

}
