<?php

namespace App\Http\Controllers\Konten;

use App\Models\Berita;
use App\Models\Dosen;
use App\Models\Prodi;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ShowDosenController extends Controller
{
    public function sisteminformasi()
    {
        $dosen = Dosen::all()->where('prodi_id', '9');
        $prodi = Prodi::all()->where('id', '9');
        $page = 'Dosen Sistem Informasi';
        $berita = Berita::all();
        return view('kontens.dosenprodi.sisteminformasi', compact('dosen','prodi', 'page', 'berita'));
    }

    public function tsipil()
    {
        $dosen = Dosen::all()->where('prodi_id', '2');
        $prodi = Prodi::all()->where('id', '2');
        $page = 'Dosen Teknik Sipil';
        $berita = Berita::all();
        return view('kontens.dosenprodi.tsipil', compact('dosen','prodi', 'page', 'berita'));
    }

    public function tmesin()
    {
        $dosen = Dosen::all()->where('prodi_id', '3');
        $prodi = Prodi::all()->where('id', '3');
        $page = 'Dosen Teknik Mesin';
        $berita = Berita::all();
        return view('kontens.dosenprodi.tmesin', compact('dosen','prodi', 'page', 'berita'));
    }

    public function tkimia()
    {
        $dosen = Dosen::all()->where('prodi_id', '4');
        $prodi = Prodi::all()->where('id', '4');
        $page = 'Dosen Teknik Kimia';
        $berita = Berita::all();
        return view('kontens.dosenprodi.tkimia', compact('dosen','prodi', 'page', 'berita'));
    }

    public function tindustri()
    {
        $dosen = Dosen::all()->where('prodi_id', '5');
        $prodi = Prodi::all()->where('id', '5');
        $page = 'Dosen Teknik Industri';
        $berita = Berita::all();
        return view('kontens.dosenprodi.tindustri', compact('dosen','prodi', 'page', 'berita'));
    }

    public function telektro()
    {
        $dosen = Dosen::all()->where('prodi_id', '6');
        $prodi = Prodi::all()->where('id', '6');
        $page = 'Dosen Teknik Elektro';
        $berita = Berita::all();
        return view('kontens.dosenprodi.telektro', compact('dosen','prodi', 'page', 'berita'));
    }

    public function tinformatika()
    {
        $dosen = Dosen::all()->where('prodi_id', '7');
        $prodi = Prodi::all()->where('id', '7');
        $page = 'Dosen Teknik Informatika';
        $berita = Berita::all();
        return view('kontens.dosenprodi.tinformatika', compact('dosen','prodi', 'page', 'berita'));
    }
    public function tarsitektur()
    {
        $dosen = Dosen::all()->where('prodi_id', '8');
        $prodi = Prodi::all()->where('id', '8');
        $page = 'Dosen Teknik Arsitektur';
        $berita = Berita::all();
        return view('kontens.dosenprodi.tarsitektur', compact('dosen','prodi', 'page', 'berita'));
    }

    public function tmaterial()
    {
        $dosen = Dosen::all()->where('prodi_id', '10');
        $prodi = Prodi::all()->where('id', '10');
        $page = 'Dosen Teknik Material';
        $berita = Berita::all();
        return view('kontens.dosenprodi.tmaterial', compact('dosen','prodi', 'page', 'berita'));
    }

    public function tlogistik()
    {
        $dosen = Dosen::all()->where('prodi_id', '11');
        $prodi = Prodi::all()->where('id', '11');
        $page = 'Dosen Teknik Logistik';
        $berita = Berita::all();
        return view('kontens.dosenprodi.tlogistik', compact('dosen','prodi', 'page', 'berita'));
    }
}
