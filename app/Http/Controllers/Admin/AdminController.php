<?php

namespace App\Http\Controllers\Admin;

use App\Models\Berita;
use App\Models\Dosen;
use App\Models\Download;
use App\Models\Hmj;
use App\Models\Konten;
use App\Models\Prestasi;
use App\Models\Prodi;
use App\Models\Sejarah;
use App\Models\User;
use App\Models\Visimisi;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Laravel\Ui\Presets\Preset;

use function GuzzleHttp\Promise\all;

class AdminController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $page = "Dasboard Admin";
        return view('admin.dashboard', compact('user', 'page'));
    }


    public function show($id)
    {
        $news = Berita::find($id);
        $berita = Berita::all();
        $judul = Berita::find($id)->title;
        return view('admin.berita.show', compact('berita','news', 'judul'));
    }

    public function showdosen(Request $request)
    {
        // $page   = "Seluruh Dosen";
        // // $dosen  = Dosen::get()->where('prodi_id', $per);
        // $dosen = Dosen::all();
        // $id_prodi = Prodi::all();
        // $per = $request->prodi_id;

        // return view('admin.dosen.dosen', compact('page', 'dosen', 'id_prodi'));

        $page   = "Seluruh Dosen";
        $dosen  = Dosen::all();        
        $prodi = Prodi::all();

        if(request('search')) {
            $dosen->where('name', 'like', '%' .request('search') . '%');
                //   ->orwhere('nip', 'like', '%' . request('search') . '%');
        }

        return view('admin.dosen.show', compact('page', 'dosen', 'prodi'));
    }

    public function sejarahfakultas()
    {
        $sejarah = Sejarah::all()->where('prodi_id', '1');
        $page = "Sejarah FT UNIMAL";
        return view('admin.sejarah.fakultas', compact('sejarah', 'page'));
    }

    public function visimisifakultas()
    {
        $visimisi = Visimisi::all()->where('prodi_id', '1');
        $page = "VISI MISI FT UNIMAL";
        return view('admin.visimisi.fakultas', compact('visimisi', 'page'));
    }

}
