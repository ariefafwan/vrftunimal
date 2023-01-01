<?php

namespace App\Http\Controllers\Konten;

use App\Models\Berita;
use App\Models\Dosen;
use App\Models\Prodi;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Laravel\Ui\Presets\React;

class ShowDosenController extends Controller
{
    public function sisteminformasi(Request $request)
    {
        $prodi = Prodi::all()->where('id', '9');
        $berita = Berita::all();
        $page = 'Dosen Sistem Informasi';
        $pagination  = 12;
        $dosen = Dosen::where('prodi_id', '9')->when($request->keyword, function ($query) use ($request) {
        
            $query
            ->where('name', 'like', "%{$request->keyword}%");
            })->orderBy('created_at', 'desc')->paginate($pagination);

        $dosen->appends($request->only('keyword'));

        return view('kontens.dosenprodi.show', compact('prodi', 'page', 'berita'), [
        'dosen' => $dosen,
        
        ])->with('i', ($request->input('page', 1) - 1) * $pagination);
    }

    public function tsipil(Request $request)
    {
        $prodi = Prodi::all()->where('id', '2');
        $page = 'Dosen Teknik Sipil';
        $berita = Berita::all();
        $pagination  = 12;
        $dosen = Dosen::where('prodi_id', '2')->when($request->keyword, function ($query) use ($request) {
        
            $query
            ->where('name', 'like', "%{$request->keyword}%");
            })->orderBy('created_at', 'desc')->paginate($pagination);

        $dosen->appends($request->only('keyword'));

        return view('kontens.dosenprodi.show', compact('prodi', 'page', 'berita'), [
        'dosen' => $dosen,
        
        ])->with('i', ($request->input('page', 1) - 1) * $pagination);
        
    }

    public function tmesin(Request $request)
    {
        $prodi = Prodi::all()->where('id', '3');
        $page = 'Dosen Teknik Mesin';
        $berita = Berita::all();
        $pagination  = 12;
        $dosen = Dosen::where('prodi_id', '3')->when($request->keyword, function ($query) use ($request) {
        
            $query
            ->where('name', 'like', "%{$request->keyword}%");
            })->orderBy('created_at', 'desc')->paginate($pagination);

        $dosen->appends($request->only('keyword'));

        return view('kontens.dosenprodi.show', compact('prodi', 'page', 'berita'), [
        'dosen' => $dosen,
        
        ])->with('i', ($request->input('page', 1) - 1) * $pagination);
    }

    public function tkimia(Request $request)
    {
        $prodi = Prodi::all()->where('id', '4');
        $page = 'Dosen Teknik Kimia';
        $berita = Berita::all();
        $pagination  = 12;
        $dosen = Dosen::where('prodi_id', '4')->when($request->keyword, function ($query) use ($request) {
        
            $query
            ->where('name', 'like', "%{$request->keyword}%");
            })->orderBy('created_at', 'desc')->paginate($pagination);

        $dosen->appends($request->only('keyword'));

        return view('kontens.dosenprodi.show', compact('prodi', 'page', 'berita'), [
        'dosen' => $dosen,
        
        ])->with('i', ($request->input('page', 1) - 1) * $pagination);
    }

    public function tindustri(Request $request)
    {
        $prodi = Prodi::all()->where('id', '5');
        $page = 'Dosen Teknik Industri';
        $berita = Berita::all();
        $pagination  = 12;
        $dosen = Dosen::where('prodi_id', '5')->when($request->keyword, function ($query) use ($request) {
        
            $query
            ->where('name', 'like', "%{$request->keyword}%");
            })->orderBy('created_at', 'desc')->paginate($pagination);

        $dosen->appends($request->only('keyword'));

        return view('kontens.dosenprodi.show', compact('prodi', 'page', 'berita'), [
        'dosen' => $dosen,
        
        ])->with('i', ($request->input('page', 1) - 1) * $pagination);
    }

    public function telektro(Request $request)
    {
        $prodi = Prodi::all()->where('id', '6');
        $page = 'Dosen Teknik Elektro';
        $berita = Berita::all();
        $pagination  = 12;
        $dosen = Dosen::where('prodi_id', '6')->when($request->keyword, function ($query) use ($request) {
        
            $query
            ->where('name', 'like', "%{$request->keyword}%");
            })->orderBy('created_at', 'desc')->paginate($pagination);

        $dosen->appends($request->only('keyword'));

        return view('kontens.dosenprodi.show', compact('prodi', 'page', 'berita'), [
        'dosen' => $dosen,
        
        ])->with('i', ($request->input('page', 1) - 1) * $pagination);
    }

    public function tinformatika(Request $request)
    {
        $prodi = Prodi::all()->where('id', '7');
        $page = 'Dosen Teknik Informatika';
        $berita = Berita::all();
        $pagination  = 12;
        $dosen = Dosen::where('prodi_id', '7')->when($request->keyword, function ($query) use ($request) {
        
            $query
            ->where('name', 'like', "%{$request->keyword}%");
            })->orderBy('created_at', 'desc')->paginate($pagination);

        $dosen->appends($request->only('keyword'));

        return view('kontens.dosenprodi.show', compact('prodi', 'page', 'berita'), [
        'dosen' => $dosen,
        
        ])->with('i', ($request->input('page', 1) - 1) * $pagination);
    }
    
    public function tarsitektur(Request $request)
    {
        $prodi = Prodi::all()->where('id', '8');
        $page = 'Dosen Teknik Arsitektur';
        $berita = Berita::all();
        $pagination  = 12;
        $dosen = Dosen::where('prodi_id', '8')->when($request->keyword, function ($query) use ($request) {
        
            $query
            ->where('name', 'like', "%{$request->keyword}%");
            })->orderBy('created_at', 'desc')->paginate($pagination);

        $dosen->appends($request->only('keyword'));

        return view('kontens.dosenprodi.show', compact('prodi', 'page', 'berita'), [
        'dosen' => $dosen,
        
        ])->with('i', ($request->input('page', 1) - 1) * $pagination);
    }

    public function tmaterial(Request $request)
    {
        $prodi = Prodi::all()->where('id', '10');
        $page = 'Dosen Teknik Material';
        $berita = Berita::all();
        $pagination  = 12;
        $dosen = Dosen::where('prodi_id', '10')->when($request->keyword, function ($query) use ($request) {
        
            $query
            ->where('name', 'like', "%{$request->keyword}%");
            })->orderBy('created_at', 'desc')->paginate($pagination);

        $dosen->appends($request->only('keyword'));

        return view('kontens.dosenprodi.show', compact('prodi', 'page', 'berita'), [
        'dosen' => $dosen,
        
        ])->with('i', ($request->input('page', 1) - 1) * $pagination);
    }

    public function tlogistik(Request $request)
    {
        $prodi = Prodi::all()->where('id', '11');
        $page = 'Dosen Teknik Material';
        $berita = Berita::all();
        $pagination  = 12;
        $dosen = Dosen::where('prodi_id', '11')->when($request->keyword, function ($query) use ($request) {
        
            $query
            ->where('name', 'like', "%{$request->keyword}%");
            })->orderBy('created_at', 'desc')->paginate($pagination);

        $dosen->appends($request->only('keyword'));

        return view('kontens.dosenprodi.show', compact('prodi', 'page', 'berita'), [
        'dosen' => $dosen,
        
        ])->with('i', ($request->input('page', 1) - 1) * $pagination);
    }
}
