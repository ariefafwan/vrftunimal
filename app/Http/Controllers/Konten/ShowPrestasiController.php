<?php

namespace App\Http\Controllers\Konten;

use App\Models\Berita;
use App\Models\Prestasi;
use App\Models\Prodi;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ShowPrestasiController extends Controller
{
    public function sisteminformasi()
    {
        $prestasi = Prestasi::all()->where('prodi_id', '9');
        $prodi = Prodi::all()->where('id', '9');
        $page = 'Prestasi Mahasiswa Sistem Informasi';
        $berita = Berita::all();
        return view('kontens.prestasiprodi.sisteminformasi', compact('prestasi','prodi', 'page', 'berita'));
    }

    public function tsipil()
    {
        $prestasi = Prestasi::all()->where('prodi_id', '2');
        $prodi = Prodi::all()->where('id', '2');
        $page = 'Prestasi Mahasiswa Teknik Sipil';
        $berita = Berita::all();
        return view('kontens.prestasiprodi.tsipil', compact('prestasi','prodi', 'page', 'berita'));
    }

    public function tmesin()
    {
        $prestasi = Prestasi::all()->where('prodi_id', '3');
        $prodi = Prodi::all()->where('id', '3');
        $page = 'Prestasi Mahasiswa Teknik Mesin';
        $berita = Berita::all();
        return view('kontens.prestasiprodi.tmesin', compact('prestasi','prodi', 'page', 'berita'));
    }

    public function tkimia()
    {
        $prestasi = Prestasi::all()->where('prodi_id', '4');
        $prodi = Prodi::all()->where('id', '4');
        $page = 'Prestasi Mahasiswa Teknik Kimia';
        $berita = Berita::all();
        return view('kontens.prestasiprodi.tkimia', compact('prestasi','prodi', 'page', 'berita'));
    }

    public function tindustri()
    {
        $prestasi = Prestasi::all()->where('prodi_id', '5');
        $prodi = Prodi::all()->where('id', '5');
        $page = 'Prestasi Mahasiswa Teknik Industri';
        $berita = Berita::all();
        return view('kontens.prestasiprodi.tindustri', compact('prestasi','prodi', 'page', 'berita'));
    }

    public function telektro()
    {
        $prestasi = Prestasi::all()->where('prodi_id', '6');
        $prodi = Prodi::all()->where('id', '6');
        $page = 'Prestasi Mahasiswa Teknik Elektro';
        $berita = Berita::all();
        return view('kontens.prestasiprodi.telektro', compact('prestasi','prodi', 'page', 'berita'));
    }

    public function tinformatika()
    {
        $prestasi = Prestasi::all()->where('prodi_id', '7');
        $prodi = Prodi::all()->where('id', '7');
        $page = 'Prestasi Mahasiswa Teknik Informatika';
        $berita = Berita::all();
        return view('kontens.prestasiprodi.tinformatika', compact('prestasi','prodi', 'page', 'berita'));
    }
    public function tarsitektur()
    {
        $prestasi = Prestasi::all()->where('prodi_id', '8');
        $prodi = Prodi::all()->where('id', '8');
        $page = 'Prestasi Mahasiswa Teknik Arsitektur';
        $berita = Berita::all();
        return view('kontens.prestasiprodi.tarsitektur', compact('prestasi','prodi', 'page', 'berita'));
    }

    public function tmaterial()
    {
        $prestasi = Prestasi::all()->where('prodi_id', '10');
        $prodi = Prodi::all()->where('id', '10');
        $page = 'Prestasi Mahasiswa Teknik Material';
        $berita = Berita::all();
        return view('kontens.prestasiprodi.tmaterial', compact('prestasi','prodi', 'page', 'berita'));
    }

    public function tlogistik()
    {
        $prestasi = Prestasi::all()->where('prodi_id', '11');
        $prodi = Prodi::all()->where('id', '11');
        $page = 'Prestasi Mahasiswa Teknik Logistik';
        $berita = Berita::all();
        return view('kontens.prestasiprodi.tlogistik', compact('prestasi','prodi', 'page', 'berita'));
    }
}
