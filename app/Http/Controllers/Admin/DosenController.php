<?php

namespace App\Http\Controllers\Admin;

use App\Models\Dosen;
use App\Models\Prodi;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class DosenController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $page   = "Seluruh Dosen";
        // $dosen  = Dosen::all();        
        // $prodi = Prodi::all();

        // if(request('search')) {
        //     $dosen->where('name', 'like', '%' .request('search') . '%')
        //           ->orwhere('nip', 'like', '%' . request('search') . '%');
        // }

        // return view('admin.dosen.show', compact('page', 'dosen', 'prodi'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $prodi      = Prodi::all();
        $page       = "Tambah Dosen";
        return view('admin.dosen.create', compact('page', 'prodi'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $nm = $request->profile_img;
        $namaFile = $nm->getClientOriginalName();

        $dtUpload = new Dosen();
        $dtUpload->name = $request->name;
        $dtUpload->profile_img = $namaFile;
        $dtUpload->nip = $request->nip;
        $dtUpload->nidn = $request->nidn;
        $dtUpload->prodi_id = $request->prodi_id;

        $nm->move(public_path() . '/img/profil', $namaFile);
        $dtUpload->save();

        return redirect()->route('showdosen')->with(['message' => 'News created successfully!']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $page   = "Seluruh Dosen";
        $dosen   = Dosen::find($id);
        $prodi = Prodi::all();
        return view('admin.dosen.dosen', compact('page', 'dosen', 'prodi'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $page   = "Edit Dosen";
        $dosen  = Dosen::findOrFail($id);
        $prodi  = Prodi::all();
        return view('admin.dosen.edosen', compact('page', 'dosen', 'prodi'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $nm = $request->profile_img;
        $namaFile = $nm->getClientOriginalName();

        $dtUpload = Dosen::find($id);
        $dtUpload->name = $request->name;
        $dtUpload->profile_img = $namaFile;
        $dtUpload->nip = $request->nip;
        $dtUpload->nidn = $request->nidn;
        $dtUpload->prodi_id = $request->prodi_id;

        $nm->move(public_path() . '/img/profil', $namaFile);
        $dtUpload->save();

        return redirect()->route('showdosen')->with(['message' => 'News created successfully!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $dosen = Dosen::findOrFail($id);

        $dosen->delete();

        return back()->with(['message' => 'Dosen deleted successfully!']);
    }
}
