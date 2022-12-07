<?php

namespace App\Http\Controllers\Konten;

use App\Models\Berita;
use App\Models\Visimisi;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ShowVisiController extends Controller
{
    public function sisteminformasi()
    {
        $visimisi = Visimisi::all()->where('prodi_id', '11');
        $page = 'Visimisi Sistem Informasi';
        $berita = Berita::all();
        return view('kontens.visimisiprodi.sisteminformasi', compact('visimisi', 'page', 'berita'));
    }

    public function tsipil()
    {
        $visimisi = Visimisi::all()->where('prodi_id', '4');
        $page = 'Visimisi Teknik Sipil';
        $berita = Berita::all();
        return view('kontens.visimisiprodi.tsipil', compact('visimisi', 'page', 'berita'));
    }

    public function tmesin()
    {
        $visimisi = Visimisi::all()->where('prodi_id', '5');
        $page = 'Visimisi Teknik Mesin';
        $berita = Berita::all();
        return view('kontens.visimisiprodi.tmesin', compact('visimisi', 'page', 'berita'));
    }

    public function tkimia()
    {
        $visimisi = Visimisi::all()->where('prodi_id', '6');
        $page = 'Visimisi Teknik Kimia';
        $berita = Berita::all();
        return view('kontens.visimisiprodi.tkimia', compact('visimisi', 'page', 'berita'));
    }

    public function tindustri()
    {
        $visimisi = Visimisi::all()->where('prodi_id', '7');
        $page = 'Visimisi Teknik Industri';
        $berita = Berita::all();
        return view('kontens.visimisiprodi.tindustri', compact('visimisi', 'page', 'berita'));
    }

    public function telektro()
    {
        $visimisi = Visimisi::all()->where('prodi_id', '8');
        $page = 'Visimisi Teknik Elektro';
        $berita = Berita::all();
        return view('kontens.visimisiprodi.telektro', compact('visimisi', 'page', 'berita'));
    }

    public function tinformatika()
    {
        $visimisi = Visimisi::all()->where('prodi_id', '9');
        $page = 'Visimisi Teknik Informatika';
        $berita = Berita::all();
        return view('kontens.visimisiprodi.tinformatika', compact('visimisi', 'page', 'berita'));
    }
    public function tarsitektur()
    {
        $visimisi = Visimisi::all()->where('prodi_id', '10');
        $page = 'Visimisi Teknik Arsitektur';
        $berita = Berita::all();
        return view('kontens.visimisiprodi.tarsitektur', compact('visimisi', 'page', 'berita'));
    }

    public function tmaterial()
    {
        $visimisi = Visimisi::all()->where('prodi_id', '12');
        $page = 'Visimisi Teknik Material';
        $berita = Berita::all();
        return view('kontens.visimisiprodi.tmaterial', compact('visimisi', 'page', 'berita'));
    }

    public function tlogistik()
    {
        $visimisi = Visimisi::all()->where('prodi_id', '13');
        $page = 'Visimisi Teknik Logistik';
        $berita = Berita::all();
        return view('kontens.visimisiprodi.tmaterial', compact('visimisi', 'page', 'berita'));
    }
}
