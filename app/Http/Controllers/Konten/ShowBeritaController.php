<?php

namespace App\Http\Controllers\Konten;

use App\Models\Berita;
use App\Models\Prodi;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ShowBeritaController extends Controller
{
    public function sisteminformasi()
    {
        $news = Berita::all()->where('prodi_id', '9');
        $prodi = Prodi::all()->where('id', '9');
        $page = 'Berita Sistem Informasi';
        $berita = Berita::all();
        return view('kontens.berita.sisteminformasi', compact('news','prodi', 'page', 'berita'));
    }

    public function tsipil()
    {
        $news = Berita::all()->where('prodi_id', '2');
        $prodi = Prodi::all()->where('id', '2');
        $page = 'Berita Teknik Sipil';
        $berita = Berita::all();
        return view('kontens.berita.tsipil', compact('news','prodi', 'page', 'berita'));
    }

    public function tmesin()
    {
        $news = Berita::all()->where('prodi_id', '3');
        $prodi = Prodi::all()->where('id', '3');
        $page = 'Berita Teknik Mesin';
        $berita = Berita::all();
        return view('kontens.berita.tmesin', compact('news','prodi', 'page', 'berita'));
    }

    public function tkimia()
    {
        $news = Berita::all()->where('prodi_id', '4');
        $prodi = Prodi::all()->where('id', '4');
        $page = 'Berita Teknik Kimia';
        $berita = Berita::all();
        return view('kontens.berita.tkimia', compact('news','prodi', 'page', 'berita'));
    }

    public function tindustri()
    {
        $news = Berita::all()->where('prodi_id', '5');
        $prodi = Prodi::all()->where('id', '5');
        $page = 'Berita Teknik Industri';
        $berita = Berita::all();
        return view('kontens.berita.tindustri', compact('news','prodi', 'page', 'berita'));
    }

    public function telektro()
    {
        $news = Berita::all()->where('prodi_id', '6');
        $prodi = Prodi::all()->where('id', '6');
        $page = 'Berita Teknik Elektro';
        $berita = Berita::all();
        return view('kontens.berita.telektro', compact('news','prodi', 'page', 'berita'));
    }

    public function tinformatika()
    {
        $news = Berita::all()->where('prodi_id', '7');
        $prodi = Prodi::all()->where('id', '7');
        $page = 'Berita Teknik Informatika';
        $berita = Berita::all();
        return view('kontens.berita.tinformatika', compact('news','prodi', 'page', 'berita'));
    }
    public function tarsitektur()
    {
        $news = Berita::all()->where('prodi_id', '8');
        $prodi = Prodi::all()->where('id', '8');
        $page = 'Berita Teknik Arsitektur';
        $berita = Berita::all();
        return view('kontens.berita.tarsitektur', compact('news','prodi', 'page', 'berita'));
    }

    public function tmaterial()
    {
        $news = Berita::all()->where('prodi_id', '10');
        $prodi = Prodi::all()->where('id', '10');
        $page = 'Berita Teknik Material';
        $berita = Berita::all();
        return view('kontens.berita.tmaterial', compact('news','prodi', 'page', 'berita'));
    }

    public function tlogistik()
    {
        $news = Berita::all()->where('prodi_id', '11');
        $prodi = Prodi::all()->where('id', '11');
        $page = 'Berita Teknik Logistik';
        $berita = Berita::all();
        return view('kontens.berita.tlogistik', compact('news','prodi', 'page', 'berita'));
    }
}
