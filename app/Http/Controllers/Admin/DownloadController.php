<?php

namespace App\Http\Controllers\Admin;

use App\Models\Download;
use App\Models\Prodi;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class DownloadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $download = Download::all();
        $page = "Download";
        return view('admin.downloads.download', compact('download', 'page'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $download = Download::all();
        $prodi = Prodi::all();
        $page = "Tambah File Download";
        return view('admin.downloads.cdownload', compact('download', 'prodi', 'page'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $nm = $request->file;
        $namaFile = $nm->getClientOriginalName();
        
        $dtUpload = new Download();
        $dtUpload->name = $request->name;
        $dtUpload->prodi_id = $request->prodi_id;
        $dtUpload->file = $namaFile;

        $nm->move(public_path() . '/file/download', $namaFile);
        $dtUpload->save();

        return redirect()->route('download.index')->with(['message' => 'File created successfully!']);
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
        $download = Download::findOrFail($id);
        $prodi = Prodi::all();
        $page = "Edit Download";
        return view('admin.downloads.edit', compact('download', 'prodi', 'page'));
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
        
        $dtUpload = Download::find($id);
        $dtUpload->name = $request->name;
        $dtUpload->prodi_id = $request->prodi_id;
        $dtUpload->file = $request->file;

        $nm->move(public_path() . '/file/download', $namaFile);
        $dtUpload->save();

        return redirect()->route('download.index')->with(['message' => 'File created successfully!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $download = Download::findOrFail($id);

        if(file_exists(public_path('file/download/') . $download->file)){
            unlink(public_path('file/download/') . $download->file);
        }

        $download->delete();

        return back()->with(['message' => 'File deleted successfully!']);
    }
}
