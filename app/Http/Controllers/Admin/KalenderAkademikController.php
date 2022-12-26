<?php

namespace App\Http\Controllers\Admin;

use App\Models\Kalender;
use App\Models\Prestasi;
use App\Models\Prodi;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;


class KalenderAkademikController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $page   = "Kalender Akademik";
        $kalender  = Kalender::all();
        return view('admin.kalender.kalender', compact('page', 'kalender'));
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
        $nm = $request->file;
        $namaFile = $nm->getClientOriginalName();
        
        $dtUpload = new Kalender;
        $dtUpload->name = $request->name;
        $dtUpload->file = $namaFile;

        $nm->move(public_path() . '/file/kalender', $namaFile);
        $dtUpload->save();

        return redirect()->route('kalenderakademik.index')->with(['message' => 'File Updated successfully!']);
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
        $page   = "Edit Kalender Akademik";
        $kalender  = Kalender::findOrFail($id);
        return view('admin.kalender.edit', compact('page', 'kalender'));
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
        
        $dtUpload = Kalender::find($id);
        $dtUpload->name = $request->name;
        $dtUpload->file = $namaFile;

        $nm->move(public_path() . '/file/kalender', $namaFile);
        $dtUpload->save();

        return redirect()->route('kalenderakademik.index')->with(['message' => 'File Updated successfully!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $kalender = Kalender::findOrFail($id);

        if(file_exists(public_path('file/kalender/') . $kalender->file)){
            unlink(public_path('file/kalender/') . $kalender->file);
        }

        $kalender->delete();

        return back()->with(['message' => 'File deleted successfully!']);
    }
}
