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
        return view('index', compact('berita'));
    }

    public function show()
    {
        $berita = Berita::all();
        $page = "asal";
        return view('admin.berita.show', compact('berita', 'page'));
    }
}
