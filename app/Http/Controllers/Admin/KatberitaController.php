<?php

namespace App\Http\Controllers\Admin;

use App\Models\Katberita;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Str;

class KatberitaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $page       = "Kategori Berita";
        $katberita  = Katberita::all();
        return view('admin.berita.katberita', compact('page', 'katberita'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $page       = "Tambah Kategori Berita";
        $katberita  = Katberita::all();
        return view('admin.berita.ckatberita', compact('page', 'katberita'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $data = Str::slug($request->name);

        $dtUpload = new Katberita();
        $dtUpload->name = $request->name;
        $dtUpload->slug = $data;
        $dtUpload->status = $request->status;

        $dtUpload->save();

        return redirect()->route('katberita.index')->with(['message' => 'News created successfully!']);
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
        $katberita  = Katberita::findOrFail($id);
        $page       = "Edit Kategori Berita";

        return view('admin.berita.ekatberita', compact('katberita', 'page'));
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
        $data = Str::slug($request->name);

        $dtUpload = Katberita::find($id);
        $dtUpload->name = $request->name;
        $dtUpload->slug = $data;
        $dtUpload->status = $request->status;

        $dtUpload->save();

        return redirect()->route('katberita.index')->with(['message' => 'News created successfully!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $news = Katberita::findOrFail($id);

        $news->delete();

        return back()->with(['message' => 'News deleted successfully!']);
    }
}
