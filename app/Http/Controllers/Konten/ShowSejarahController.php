<?php

namespace App\Http\Controllers\Konten;

use App\Models\Berita;
use App\Models\Sejarah;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ShowSejarahController extends Controller
{
    public function sisteminformasi()
    {
        $sejarah = Sejarah::all()->where('prodi_id', '9');
        $page = 'Sejarah Sistem Informasi';
        $berita = Berita::all();
        return view('kontens.sejarahprodi.show', compact('sejarah', 'page', 'berita'));
    }

    public function tsipil()
    {
        $sejarah = Sejarah::all()->where('prodi_id', '2');
        $page = 'Sejarah Teknik Sipil';
        $berita = Berita::all();
        return view('kontens.sejarahprodi.show', compact('sejarah', 'page', 'berita'));
    }

    public function tmesin()
    {
        $sejarah = Sejarah::all()->where('prodi_id', '3');
        $page = 'Sejarah Teknik Mesin';
        $berita = Berita::all();
        return view('kontens.sejarahprodi.show', compact('sejarah', 'page', 'berita'));
    }

    public function tkimia()
    {
        $sejarah = Sejarah::all()->where('prodi_id', '4');
        $page = 'Sejarah Teknik Kimia';
        $berita = Berita::all();
        return view('kontens.sejarahprodi.show', compact('sejarah', 'page', 'berita'));
    }

    public function tindustri()
    {
        $sejarah = Sejarah::all()->where('prodi_id', '5');
        $page = 'Sejarah Teknik Industri';
        $berita = Berita::all();
        return view('kontens.sejarahprodi.show', compact('sejarah', 'page', 'berita'));
    }

    public function telektro()
    {
        $sejarah = Sejarah::all()->where('prodi_id', '6');
        $page = 'Sejarah Teknik Elektro';
        $berita = Berita::all();
        return view('kontens.sejarahprodi.show', compact('sejarah', 'page', 'berita'));
    }

    public function tinformatika()
    {
        $sejarah = Sejarah::all()->where('prodi_id', '7');
        $page = 'Sejarah Teknik Informatika';
        $berita = Berita::all();
        return view('kontens.sejarahprodi.show', compact('sejarah', 'page', 'berita'));
    }
    public function tarsitektur()
    {
        $sejarah = Sejarah::all()->where('prodi_id', '8');
        $page = 'Sejarah Teknik Arsitektur';
        $berita = Berita::all();
        return view('kontens.sejarahprodi.show', compact('sejarah', 'page', 'berita'));
    }

    public function tmaterial()
    {
        $sejarah = Sejarah::all()->where('prodi_id', '10');
        $page = 'Sejarah Teknik Material';
        $berita = Berita::all();
        return view('kontens.sejarahprodi.show', compact('sejarah', 'page', 'berita'));
    }

    public function tlogistik()
    {
        $sejarah = Sejarah::all()->where('prodi_id', '11');
        $page = 'Sejarah Teknik Logistik';
        $berita = Berita::all();
        return view('kontens.sejarahprodi.show', compact('sejarah', 'page', 'berita'));
    }
}
