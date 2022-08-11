<?php

namespace App\Http\Controllers;

use App\Models\Dosen;
use App\Models\Sejarah;
use App\Models\Visimisi;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

class ProfilController extends Controller
{
    public function sejarah()
    {
        $page = 'Sejarah';
        return view('sejarah', compact('page'));
    }

    public function list_penyewaan(Sejarah $sejarah, Request $request)
    {
        $page = "Update Sejarah";
        $dtUpload = new Sejarah();
        $dtUpload->title = $request->title;
        $dtUpload->details = $request->details;
        $dtUpload->prodi_id = $request->prodi_id;
        $dtUpload->katberita_id = $request->katberita_id;

        $dtUpload->save();
        
        return view('layouts.admin.penyewaan.index', compact('page', 'state', 'data', 'bukti', 'check', 'st'));
    }

    public function visimisi()
    {
        $page = 'Visi Misi';
        return view('visimisi', compact('page'));   
    }        
    
}
