<?php

namespace App\Http\Controllers\Admin;

use App\Models\Akreditasi;
use App\Models\Prodi;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class AkreditasiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $akred = Akreditasi::all();
        $page = "Akreditasi";
        return view('admin.akreditasi.akreditasi', compact('akred', 'page'));
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
        $akred = Akreditasi::findOrFail($id);
        $prodi = Prodi::all();
        $page = "Edit Akreditasi";
        return view('admin.akreditasi.edit', compact('akred', 'prodi', 'page'));
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
        $nm = $request->file;
        $namaFile = $nm->getClientOriginalName();
        
        $dtUpload = Akreditasi::find($id);
        $dtUpload->name = $request->name;
        $dtUpload->prodi_id = $request->prodi_id;
        $dtUpload->file = $namaFile;

        $nm->move(public_path() . '/file/akreditasi', $namaFile);
        $dtUpload->save();

        return redirect()->route('akred.index')->with(['message' => 'File Updated successfully!']);
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
