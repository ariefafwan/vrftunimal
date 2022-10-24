<?php

namespace App\Http\Controllers\Admin;

use App\Models\Berita;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class AdminController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $page = "Dasboard Admin";
        return view('admin.dashboard', compact('user', 'page'));
    }

    public function welcome()
    {
        $berita = Berita::all();
        $page = 'Beranda';
        return view('index', compact('berita', 'page'));
    }

    public function show($id)
    {
        $news = Berita::find($id);
        $berita = Berita::all();
        $judul = Berita::find($id)->title;
        return view('admin.berita.show', compact('berita','news', 'judul'));
    }

}
