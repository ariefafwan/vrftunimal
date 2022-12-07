<?php

namespace App\Http\Controllers\Admin;

use App\Models\Visimisi;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class VisiMisiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $visimisi = Visimisi::all();
        $page = "Visi Misi";
        return view('admin.visimisi.visimisi', compact('visimisi', 'page'));
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
        $visimisi = Visimisi::find($id);
        $page = "Detail Visi Misi";
        return view('admin.visimisi.show', compact('visimisi', 'page'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $visimisi = Visimisi::findOrFail($id);
        $page = "Edit Visi Misi";
        return view('admin.visimisi.evisimisi', compact('visimisi', 'page'));
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
        $dtUpload = Visimisi::find($id);       
        $dtUpload->visi = $request->visi;
        $dtUpload->misi1 = $request->misi1;
        $dtUpload->misi2 = $request->misi2;
        $dtUpload->misi3 = $request->misi3;
        $dtUpload->misi4 = $request->misi4;
        $dtUpload->misi5 = $request->misi5;
        $dtUpload->misi6 = $request->misi6;
        $dtUpload->tujuan1 = $request->tujuan1;
        $dtUpload->tujuan2 = $request->tujuan2;
        $dtUpload->tujuan3 = $request->tujuan3;
        $dtUpload->tujuan4 = $request->tujuan4;
        $dtUpload->tujuan5 = $request->tujuan5;
        $dtUpload->tujuan6 = $request->tujuan6;
        $dtUpload->sasaran1 = $request->sasaran1;
        $dtUpload->sasaran2 = $request->sasaran2;
        $dtUpload->sasaran3 = $request->sasaran3;
        $dtUpload->sasaran4 = $request->sasaran4;
        $dtUpload->sasaran5 = $request->sasaran5;
        $dtUpload->sasaran6 = $request->sasaran6;
        $dtUpload->sasaran7 = $request->sasaran7;
        $dtUpload->sasaran8 = $request->sasaran8;
        $dtUpload->sasaran9 = $request->sasaran9;
        $dtUpload->sasaran10 = $request->sasaran10;
        $dtUpload->sasaran11 = $request->sasaran11;
        $dtUpload->sasaran12 = $request->sasaran12;
        $dtUpload->sasaran13 = $request->sasaran13;

        $dtUpload->save();

        return redirect()->route('visimisiprodi.index')->with(['message' => 'Visi Misi Edited successfully!']);
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
