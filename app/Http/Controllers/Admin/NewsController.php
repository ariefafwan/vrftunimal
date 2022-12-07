<?php

namespace App\Http\Controllers\Admin;

use App\Models\Berita;
use App\Models\Katberita;
use App\Models\Prodi;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Str;
use Prophecy\Call\Call;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $newslist = Berita::with('katberita')->latest()->get();
        $page = "Berita";
        return view('admin.berita.berita', compact('newslist', 'page'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Katberita::latest()->select('id','name')->where('status',1)->get();
        $prodi      = Prodi::all();
        $page       = "Buat Berita";
        return view('admin.berita.cberita', compact('categories', 'page', 'prodi'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $nm = $request->image;
        $namaFile = $nm->getClientOriginalName();
        $data = Str::slug($request->title);

        if(isset($request->status)){
            $status = true;
        }else{
            $status = false;
        }

        if(isset($request->featured)){
            $featured = true;
        }else{
            $featured = false;
        }

        $dtUpload = new Berita();
        $dtUpload->title = $request->title;
        $dtUpload->slug = $data;
        $dtUpload->image = $namaFile;
        $dtUpload->details1 = $request->details1;
        $dtUpload->details2 = $request->details2;
        $dtUpload->details3 = $request->details3;
        $dtUpload->details4 = $request->details4;
        $dtUpload->details5 = $request->details5;
        $dtUpload->details6 = $request->details6;
        $dtUpload->prodi_id = $request->prodi_id;
        $dtUpload->katberita_id = $request->katberita_id;
        $dtUpload->status = $status;
        $dtUpload->featured = $featured;


        $nm->move(public_path() . '/img/news', $namaFile);
        $dtUpload->save();

        return redirect()->route('berita.index')->with(['message' => 'News created successfully!']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // $news = Berita::find($id);
        // $judul = Berita::find($id)->Str::title();
        // return view('admin.berita.show', compact('news', 'slug'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $categories = Katberita::latest()->select('id','name')->where('status',1)->get();
        $news       = Berita::findOrFail($id);
        $prodi      = Prodi::all();
        $page       = "Edit Berita";

        return view('admin.berita.edit', compact('categories','news','page', 'prodi'));
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
        $nm = $request->image;
        $namaFile = $nm->getClientOriginalName();
        $data = Str::slug($request->title);

        if(isset($request->status)){
            $status = true;
        }else{
            $status = false;
        }

        if(isset($request->featured)){
            $featured = true;
        }else{
            $featured = false;
        }

        $dtUpload = Berita::find($id);
        $dtUpload->title = $request->title;
        $dtUpload->slug = $data;
        $dtUpload->image = $namaFile;
        $dtUpload->details1 = $request->details1;
        $dtUpload->details2 = $request->details2;
        $dtUpload->details3 = $request->details3;
        $dtUpload->details4 = $request->details4;
        $dtUpload->details5 = $request->details5;
        $dtUpload->details6 = $request->details6;
        $dtUpload->prodi_id = $request->prodi_id;
        $dtUpload->katberita_id = $request->katberita_id;
        $dtUpload->status = $status;
        $dtUpload->featured = $featured;


        $nm->move(public_path() . '/img/news', $namaFile);
        $dtUpload->save();

        return redirect()->route('berita.index')->with(['message' => 'News created successfully!']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $news = Berita::findOrFail($id);

        if(file_exists(public_path('img/news/') . $news->image)){
            unlink(public_path('img/news/') . $news->image);
        }

        $news->delete();

        return back()->with(['message' => 'News deleted successfully!']);
    }
}
