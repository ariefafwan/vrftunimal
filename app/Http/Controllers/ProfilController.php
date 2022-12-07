<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Models\Dosen;
use App\Models\Hmj;
use App\Models\Konten;
use App\Models\Prestasi;
use App\Models\Prodi;
use App\Models\Sejarah;
use App\Models\Visimisi;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

class ProfilController extends Controller
{
    public function sejarah()
    {
        $page = 'Sejarah';
        $sejarah = Sejarah::all()->where('prodi_id', '3');
        $berita = Berita::all();
        return view('sejarah', compact('page', 'sejarah', 'berita'));
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

    public function visimisi()
    {
        $page = 'Visi Misi';
        $visimisi = Visimisi::all()->where('prodi_id', '3');
        $berita = Berita::all();
        return view('visimisi', compact('page', 'berita', 'visimisi'));   
    }

    public function prestasi()
    {
        $page = 'Prestasi Mahasiswa';
        $prestasi = Prestasi::all();
        $berita = Berita::all();
        return view('prestasi', compact('page', 'berita', 'prestasi'));   
    }
    
}
