<?php

namespace App\Http\Controllers\Konten;

use App\Models\Berita;
use App\Models\Prodi;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ShowBeritaController extends Controller
{
    public function sisteminformasi(Request $request)
    {
        $prodi = Prodi::all()->where('id', '9');
        $berita = Berita::all();
        $page = 'Berita Sistem Informasi';
        $pagination  = 12;
        $news = Berita::where('prodi_id', '9')->when($request->keyword, function ($query) use ($request) {
        
            $query
            ->where('title', 'like', "%{$request->keyword}%");
            })->orderBy('created_at', 'desc')->paginate($pagination);

        $news->appends($request->only('keyword'));

        return view('kontens.berita.show', compact('prodi', 'page', 'berita'), [
        'news' => $news,
        
        ])->with('i', ($request->input('page', 1) - 1) * $pagination);
    }

    public function tsipil(Request $request)
    {
        $prodi = Prodi::all()->where('id', '2');
        $berita = Berita::all();
        $page = 'Berita Teknik Sipil';
        $pagination  = 12;
        $news = Berita::where('prodi_id', '2')->when($request->keyword, function ($query) use ($request) {
        
            $query
            ->where('title', 'like', "%{$request->keyword}%");
            })->orderBy('created_at', 'desc')->paginate($pagination);

        $news->appends($request->only('keyword'));

        return view('kontens.berita.show', compact('prodi', 'page', 'berita'), [
        'news' => $news,
        
        ])->with('i', ($request->input('page', 1) - 1) * $pagination);
        
    }

    public function tmesin(Request $request)
    {
        $prodi = Prodi::all()->where('id', '3');
        $berita = Berita::all();
        $page = 'Berita Teknik Mesin';
        $pagination  = 12;
        $news = Berita::where('prodi_id', '3')->when($request->keyword, function ($query) use ($request) {
        
            $query
            ->where('title', 'like', "%{$request->keyword}%");
            })->orderBy('created_at', 'desc')->paginate($pagination);

        $news->appends($request->only('keyword'));

        return view('kontens.berita.show', compact('prodi', 'page', 'berita'), [
        'news' => $news,
        
        ])->with('i', ($request->input('page', 1) - 1) * $pagination);
    }

    public function tkimia(Request $request)
    {
        $prodi = Prodi::all()->where('id', '4');
        $berita = Berita::all();
        $page = 'Berita Teknik Kimia';
        $pagination  = 12;
        $news = Berita::where('prodi_id', '4')->when($request->keyword, function ($query) use ($request) {
        
            $query
            ->where('title', 'like', "%{$request->keyword}%");
            })->orderBy('created_at', 'desc')->paginate($pagination);

        $news->appends($request->only('keyword'));

        return view('kontens.berita.show', compact('prodi', 'page', 'berita'), [
        'news' => $news,
        
        ])->with('i', ($request->input('page', 1) - 1) * $pagination);
    }

    public function tindustri(Request $request)
    {
        $prodi = Prodi::all()->where('id', '5');
        $berita = Berita::all();
        $page = 'Berita Teknik Kimia';
        $pagination  = 12;
        $news = Berita::where('prodi_id', '5')->when($request->keyword, function ($query) use ($request) {
        
            $query
            ->where('title', 'like', "%{$request->keyword}%");
            })->orderBy('created_at', 'desc')->paginate($pagination);

        $news->appends($request->only('keyword'));

        return view('kontens.berita.show', compact('prodi', 'page', 'berita'), [
        'news' => $news,
        
        ])->with('i', ($request->input('page', 1) - 1) * $pagination);
    }

    public function telektro(Request $request)
    {
        $prodi = Prodi::all()->where('id', '6');
        $berita = Berita::all();
        $page = 'Berita Teknik Elektro';
        $pagination  = 12;
        $news = Berita::where('prodi_id', '6')->when($request->keyword, function ($query) use ($request) {
        
            $query
            ->where('title', 'like', "%{$request->keyword}%");
            })->orderBy('created_at', 'desc')->paginate($pagination);

        $news->appends($request->only('keyword'));

        return view('kontens.berita.show', compact('prodi', 'page', 'berita'), [
        'news' => $news,
        
        ])->with('i', ($request->input('page', 1) - 1) * $pagination);
    }

    public function tinformatika(Request $request)
    {
        $prodi = Prodi::all()->where('id', '7');
        $berita = Berita::all();
        $page = 'Berita Teknik Informatika';
        $pagination  = 12;
        $news = Berita::where('prodi_id', '7')->when($request->keyword, function ($query) use ($request) {
        
            $query
            ->where('title', 'like', "%{$request->keyword}%");
            })->orderBy('created_at', 'desc')->paginate($pagination);

        $news->appends($request->only('keyword'));

        return view('kontens.berita.show', compact('prodi', 'page', 'berita'), [
        'news' => $news,
        
        ])->with('i', ($request->input('page', 1) - 1) * $pagination);
    }
    
    public function tarsitektur(Request $request)
    {
        $prodi = Prodi::all()->where('id', '8');
        $berita = Berita::all();
        $page = 'Berita Teknik Arsitektur';
        $pagination  = 12;
        $news = Berita::where('prodi_id', '8')->when($request->keyword, function ($query) use ($request) {
        
            $query
            ->where('title', 'like', "%{$request->keyword}%");
            })->orderBy('created_at', 'desc')->paginate($pagination);

        $news->appends($request->only('keyword'));

        return view('kontens.berita.show', compact('prodi', 'page', 'berita'), [
        'news' => $news,
        
        ])->with('i', ($request->input('page', 1) - 1) * $pagination);
    }

    public function tmaterial(Request $request)
    {
        $prodi = Prodi::all()->where('id', '10');
        $berita = Berita::all();
        $page = 'Berita Teknik Material';
        $pagination  = 12;
        $news = Berita::where('prodi_id', '10')->when($request->keyword, function ($query) use ($request) {
        
            $query
            ->where('title', 'like', "%{$request->keyword}%");
            })->orderBy('created_at', 'desc')->paginate($pagination);

        $news->appends($request->only('keyword'));

        return view('kontens.berita.show', compact('prodi', 'page', 'berita'), [
        'news' => $news,
        
        ])->with('i', ($request->input('page', 1) - 1) * $pagination);
    }

    public function tlogistik(Request $request)
    {
        $prodi = Prodi::all()->where('id', '11');
        $berita = Berita::all();
        $page = 'Berita Teknik Logistik';
        $pagination  = 12;
        $news = Berita::where('prodi_id', '11')->when($request->keyword, function ($query) use ($request) {
        
            $query
            ->where('title', 'like', "%{$request->keyword}%");
            })->orderBy('created_at', 'desc')->paginate($pagination);

        $news->appends($request->only('keyword'));

        return view('kontens.berita.show', compact('prodi', 'page', 'berita'), [
        'news' => $news,
        
        ])->with('i', ($request->input('page', 1) - 1) * $pagination);
    }
    
    
}
