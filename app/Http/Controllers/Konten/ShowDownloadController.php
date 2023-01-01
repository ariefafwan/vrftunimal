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
        $download = Download::where('prodi_id', '9')->paginate(5);
        $prodi = Prodi::all()->where('id', '9');
        $page = 'Download Sistem Informasi';
        $berita = Berita::all();
        return view('kontens.downloads.show', compact('download','prodi', 'page', 'berita'));
    }

    public function tsipil()
    {
        $download = Download::where('prodi_id', '2')->paginate(5);
        $prodi = Prodi::all()->where('id', '2');
        $page = 'Download Teknik Sipil';
        $berita = Berita::all();
        return view('kontens.downloads.show', compact('download','prodi', 'page', 'berita'));
    }

    public function tmesin()
    {
        $download = Download::where('prodi_id', '3')->paginate(5);
        $prodi = Prodi::all()->where('id', '3');
        $page = 'Download Teknik Mesin';
        $berita = Berita::all();
        return view('kontens.downloads.show', compact('download','prodi', 'page', 'berita'));
    }

    public function tkimia()
    {
        $download = Download::where('prodi_id', '4')->paginate(5);
        $prodi = Prodi::all()->where('id', '4');
        $page = 'Download Teknik Kimia';
        $berita = Berita::all();
        return view('kontens.downloads.show', compact('download','prodi', 'page', 'berita'));
    }

    public function tindustri()
    {
        $download = Download::where('prodi_id', '5')->paginate(5);
        $prodi = Prodi::all()->where('id', '5');
        $page = 'Download Teknik Industri';
        $berita = Berita::all();
        return view('kontens.downloads.show', compact('download','prodi', 'page', 'berita'));
    }

    public function telektro()
    {
        $download = Download::where('prodi_id', '6')->paginate(5);
        $prodi = Prodi::all()->where('id', '6');
        $page = 'Download Teknik Elektro';
        $berita = Berita::all();
        return view('kontens.downloads.show', compact('download','prodi', 'page', 'berita'));
    }

    public function tinformatika()
    {
        $download = Download::where('prodi_id', '7')->paginate(5);
        $prodi = Prodi::all()->where('id', '7');
        $page = 'Download Teknik Informatika';
        $berita = Berita::all();
        return view('kontens.downloads.show', compact('download','prodi', 'page', 'berita'));
    }
    public function tarsitektur()
    {
        $download = Download::where('prodi_id', '8')->paginate(5);
        $prodi = Prodi::all()->where('id', '8');
        $page = 'Download Teknik Arsitektur';
        $berita = Berita::all();
        return view('kontens.downloads.show', compact('download','prodi', 'page', 'berita'));
    }

    public function tmaterial()
    {
        $download = Download::where('prodi_id', '10')->paginate(5);
        $prodi = Prodi::all()->where('id', '10');
        $page = 'Download Teknik Material';
        $berita = Berita::all();
        return view('kontens.downloads.show', compact('download','prodi', 'page', 'berita'));
    }

    public function tlogistik()
    {
        $download = Download::where('prodi_id', '11')->paginate(5);
        $prodi = Prodi::all()->where('id', '11');
        $page = 'Download Teknik Logistik';
        $berita = Berita::all();
        return view('kontens.downloads.show', compact('download','prodi', 'page', 'berita'));
    }
}
