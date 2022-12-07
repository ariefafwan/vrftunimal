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
        $sejarah = Sejarah::all()->where('prodi_id', '11');
        $page = 'sejarah Sistem Informasi';
        $berita = Berita::all();
        return view('kontens.sejarahprodi.sisteminformasi', compact('sejarah','prodi', 'page', 'berita'));
    }

    public function tsipil()
    {
        $sejarah = Sejarah::all()->where('prodi_id', '4');
        $page = 'sejarah Teknik Sipil';
        $berita = Berita::all();
        return view('kontens.sejarahprodi.tsipil', compact('sejarah', 'page', 'berita'));
    }

    public function tmesin()
    {
        $sejarah = Sejarah::all()->where('prodi_id', '5');
        $page = 'sejarah Teknik Mesin';
        $berita = Berita::all();
        return view('kontens.sejarahprodi.tmesin', compact('sejarah', 'page', 'berita'));
    }

    public function tkimia()
    {
        $sejarah = Sejarah::all()->where('prodi_id', '6');
        $page = 'sejarah Teknik Kimia';
        $berita = Berita::all();
        return view('kontens.sejarahprodi.tkimia', compact('sejarah', 'page', 'berita'));
    }

    public function tindustri()
    {
        $sejarah = Sejarah::all()->where('prodi_id', '7');
        $page = 'sejarah Teknik Industri';
        $berita = Berita::all();
        return view('kontens.sejarahprodi.tindustri', compact('sejarah', 'page', 'berita'));
    }

    public function telektro()
    {
        $sejarah = Sejarah::all()->where('prodi_id', '8');
        $page = 'sejarah Teknik Elektro';
        $berita = Berita::all();
        return view('kontens.sejarahprodi.telektro', compact('sejarah', 'page', 'berita'));
    }

    public function tinformatika()
    {
        $sejarah = Sejarah::all()->where('prodi_id', '9');
        $page = 'sejarah Teknik Informatika';
        $berita = Berita::all();
        return view('kontens.sejarahprodi.tinformatika', compact('sejarah', 'page', 'berita'));
    }
    public function tarsitektur()
    {
        $sejarah = Sejarah::all()->where('prodi_id', '10');
        $page = 'sejarah Teknik Arsitektur';
        $berita = Berita::all();
        return view('kontens.sejarahprodi.tarsitektur', compact('sejarah', 'page', 'berita'));
    }

    public function tmaterial()
    {
        $sejarah = Sejarah::all()->where('prodi_id', '12');
        $page = 'sejarah Teknik Material';
        $berita = Berita::all();
        return view('kontens.sejarahprodi.tmaterial', compact('sejarah', 'page', 'berita'));
    }

    public function tlogistik()
    {
        $sejarah = Sejarah::all()->where('prodi_id', '13');
        $page = 'sejarah Teknik Logistik';
        $berita = Berita::all();
        return view('kontens.sejarahprodi.tmaterial', compact('sejarah', 'page', 'berita'));
    }
}
