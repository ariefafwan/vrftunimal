<?php

namespace App\Http\Controllers\Admin;

use App\Models\Pimpinan;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class PimpinanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $page   = "Pimpinan Fakultas";
        $pimpinan  = Pimpinan::all();
        return view('admin.pimpinan.pimpinan', compact('page', 'pimpinan'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
        $page   = "Pimpinan Fakultas";
        $pimpinan  = Pimpinan::findOrFail($id);
        return view('admin.pimpinan.edit', compact('page', 'pimpinan'));
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
        
        $dtUpload = Pimpinan::find($id);
        $dtUpload->name = $request->name;
        $dtUpload->nip = $request->nip;
        $dtUpload->nidn = $request->nidn;
        $dtUpload->jabatan = $request->jabatan;
        $dtUpload->profile_img = $namaFile;

        $nm->move(public_path() . '/img/profil/pimpinan', $namaFile);
        $dtUpload->save();

        return redirect()->route('pimpinan.index');
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
