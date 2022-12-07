<?php

namespace App\Http\Controllers\Admin;

use App\Models\Prestasi;
use App\Models\Prodi;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class PrestasiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $page   = "Seluruh Prestasi";
        $prestasi  = Prestasi::all();
        return view('admin.prestasi.prestasi', compact('page', 'prestasi'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $page   = "Tambah Prestasi";
        $prestasi  = Prestasi::all();
        $prodi = Prodi::all();
        return view('admin.prestasi.cprestasi', compact('page', 'prestasi', 'prodi'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $dtUpload = new Prestasi();
        $dtUpload->prestasi = $request->prestasi;
        $dtUpload->tingkat = $request->tingkat;
        $dtUpload->tahun = $request->tahun;
        $dtUpload->event = $request->event;
        $dtUpload->mahasiswa = $request->mahasiswa;
        $dtUpload->nim = $request->nim;
        $dtUpload->prodi_id = $request->prodi_id;

        $dtUpload->save();

        return redirect()->route('prestasiprodi.index')->with(['message' => 'Prestasi created successfully!']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $page   = "Detail Prestasi";
        $prestasi  = Prestasi::find($id);
        $prodi = Prodi::all();
        return view('admin.prestasi.show', compact('page', 'prestasi', 'prodi'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $page   = "Edit Prestasi";
        $prestasi  = Prestasi::findOrFail($id);
        $prodi = Prodi::all();
        return view('admin.prestasi.edit', compact('page', 'prestasi', 'prodi'));
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

        $dtUpload = Prestasi::find($id);
        $dtUpload->prestasi = $request->prestasi;
        $dtUpload->tingkat = $request->tingkat;
        $dtUpload->tahun = $request->tahun;
        $dtUpload->event = $request->event;
        $dtUpload->mahasiswa = $request->mahasiswa;
        $dtUpload->nim = $request->nim;
        $dtUpload->prodi_id = $request->prodi_id;

        $dtUpload->save();

        return redirect()->route('prestasiprodi.index')->with(['message' => 'Prestasi created successfully!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $prestasi = Prestasi::findOrFail($id);

        if(file_exists(public_path('img/prestasi/') . $prestasi->img)){
            unlink(public_path('img/prestasi/') . $prestasi->img);
        }

        $prestasi->delete();

        return back()->with(['message' => 'Prestasi deleted successfully!']);
    }
}
