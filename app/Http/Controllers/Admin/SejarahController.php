<?php

namespace App\Http\Controllers\Admin;

use App\Models\Sejarah;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class SejarahController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sejarah = Sejarah::all();
        $page = "Sejarah";
        return view('admin.sejarah.sejarah', compact('sejarah', 'page'));
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
        $sejarah = Sejarah::find($id);
        $page = "Detail Sejarah";
        return view('admin.sejarah.show', compact('sejarah', 'page'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $sejarah = Sejarah::findOrFail($id);
        $page = "Edit Sejarah";
        return view('admin.sejarah.esejarah', compact('sejarah', 'page'));
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

        $dtUpload = Sejarah::find($id);       
        $dtUpload->details1 = $request->details1;
        $dtUpload->details2 = $request->details2;
        $dtUpload->details3 = $request->details3;
        $dtUpload->details4 = $request->details4;
        $dtUpload->details5 = $request->details5;
        $dtUpload->prodi_id = $request->prodi_id;

        $dtUpload->save();

        return redirect()->route('sejarahprodi.index')->with(['message' => 'Sejarah Edited successfully!']);
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
