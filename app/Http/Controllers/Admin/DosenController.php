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
        $page   = "Seluruh Dosen";
        $dosen  = Dosen::all();
        return view('admin.dosen.dosen', compact('page', 'dosen'));
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

        return redirect()->route('dosen.index')->with(['message' => 'News created successfully!']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
