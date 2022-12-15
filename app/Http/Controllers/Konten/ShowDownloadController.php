<?php

namespace App\Http\Controllers\Konten;

use App\Models\Berita;
use App\Models\Download;
use App\Models\Prodi;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ShowDownloadController extends Controller
{
    public function sisteminformasi()
    {
        $download = Download::all()->where('prodi_id', '9');
        $prodi = Prodi::all()->where('id', '11');
        $page = 'Download Sistem Informasi';
        $berita = Berita::all();
        return view('kontens.downloads.sisteminformasi', compact('download','prodi', 'page', 'berita'));
    }

    public function tsipil()
    {
        $download = Download::all()->where('prodi_id', '2');
        $prodi = Prodi::all()->where('id', '4');
        $page = 'Download Teknik Sipil';
        $berita = Berita::all();
        return view('kontens.downloads.tsipil', compact('download','prodi', 'page', 'berita'));
    }

    public function tmesin()
    {
        $download = Download::all()->where('prodi_id', '3');
        $prodi = Prodi::all()->where('id', '5');
        $page = 'Download Teknik Mesin';
        $berita = Berita::all();
        return view('kontens.downloads.tmesin', compact('download','prodi', 'page', 'berita'));
    }

    public function tkimia()
    {
        $download = Download::all()->where('prodi_id', '4');
        $prodi = Prodi::all()->where('id', '6');
        $page = 'Download Teknik Kimia';
        $berita = Berita::all();
        return view('kontens.downloads.tkimia', compact('download','prodi', 'page', 'berita'));
    }

    public function tindustri()
    {
        $download = Download::all()->where('prodi_id', '5');
        $prodi = Prodi::all()->where('id', '7');
        $page = 'Download Teknik Industri';
        $berita = Berita::all();
        return view('kontens.downloads.tindustri', compact('download','prodi', 'page', 'berita'));
    }

    public function telektro()
    {
        $download = Download::all()->where('prodi_id', '6');
        $prodi = Prodi::all()->where('id', '8');
        $page = 'Download Teknik Elektro';
        $berita = Berita::all();
        return view('kontens.downloads.telektro', compact('download','prodi', 'page', 'berita'));
    }

    public function tinformatika()
    {
        $download = Download::all()->where('prodi_id', '7');
        $prodi = Prodi::all()->where('id', '9');
        $page = 'Download Teknik Informatika';
        $berita = Berita::all();
        return view('kontens.downloads.tinformatika', compact('download','prodi', 'page', 'berita'));
    }
    public function tarsitektur()
    {
        $download = Download::all()->where('prodi_id', '8');
        $prodi = Prodi::all()->where('id', '10');
        $page = 'Download Teknik Arsitektur';
        $berita = Berita::all();
        return view('kontens.downloads.tarsitektur', compact('download','prodi', 'page', 'berita'));
    }

    public function tmaterial()
    {
        $download = Download::all()->where('prodi_id', '10');
        $prodi = Prodi::all()->where('id', '12');
        $page = 'Download Teknik Material';
        $berita = Berita::all();
        return view('kontens.downloads.tmaterial', compact('download','prodi', 'page', 'berita'));
    }

    public function tlogistik()
    {
        $download = Download::all()->where('prodi_id', '11');
        $prodi = Prodi::all()->where('id', '13');
        $page = 'Download Teknik Logistik';
        $berita = Berita::all();
        return view('kontens.downloads.tlogistik', compact('download','prodi', 'page', 'berita'));
    }
}
