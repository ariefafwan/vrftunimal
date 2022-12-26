<?php

namespace App\Http\Controllers;

use App\Models\Akreditasi;
use App\Models\Berita;
use App\Models\Dosen;
use App\Models\Download;
use App\Models\Hmj;
use App\Models\Kalender;
use App\Models\Konten;
use App\Models\Pimpinan;
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
        $sejarah = Sejarah::all()->where('prodi_id', '1');
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
        $page = "Virtual Tour";
        return view('vr', compact('berita','dosen', 'prodi', 'visimisi', 'page','sejarah', 'prestasi'));
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

    public function download()
    {
        $page = 'File Download';
        $download = Download::all();
        $berita = Berita::all();
        return view('download', compact('page', 'berita', 'download'));   
    }

    public function pimpinan()
    {
        $page = 'Pimpinan Fakultas';
        $pimpinan = Pimpinan::all();
        $berita = Berita::all();
        return view('pimpinan', compact('page', 'berita', 'pimpinan'));   
    }

    public function berita()
    {
        $page = 'Berita';
        $berita = Berita::all();
        return view('beritaall', compact('page', 'berita'));   
    }

    public function kalender()
    {
        $page = 'Kalender Akademik';
        $berita = Berita::all();
        $kalender = Kalender::all();
        return view('kalender', compact('page', 'kalender', 'berita'));   
    }

    public function akreditasi()
    {
        $page = 'Akreditasi';
        $akreditasi = Akreditasi::all();
        $berita = Berita::all();
        return view('akreditasi', compact('page', 'akreditasi', 'berita'));   
    }
}
