<?php

namespace App\Http\Controllers;

use App\Models\Dosen;
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

    public function visimisi()
    {
        return view('visimisi');   
    }        
    
}
