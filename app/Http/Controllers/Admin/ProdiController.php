<?php

namespace App\Http\Controllers\Admin;

use App\Models\Prodi;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ProdiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $page   = "Seluruh Prodi";
        $prodi  = Prodi::all();
        return view('admin.prodi.prodi', compact('page', 'prodi'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // $page   = "Tambah Prodi";
        // $prodi  = Prodi::all();
        // return view('admin.prodi.cprodi', compact('page', 'prodi'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        // $dtUpload = new Prodi();
        // $dtUpload->name = $request->name;

        // $dtUpload->save();

        // return redirect()->route('prodi.index')->with(['message' => 'News created successfully!']);
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
        $prodi  = Prodi::findOrFail($id);
        $page   = "Edit Kategori Berita";

        return view('admin.prodi.eprodi', compact('prodi', 'page'));
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
        $dtUpload = Prodi::find($id);
        $dtUpload->name = $request->name;

        $dtUpload->save();

        return redirect()->route('prodi.index')->with(['message' => 'News created successfully!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $prodi = Prodi::findOrFail($id);

        $prodi->delete();

        return back()->with(['message' => 'News deleted successfully!']);
    }
}
