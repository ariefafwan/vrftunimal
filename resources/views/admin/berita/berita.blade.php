@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/components/datatables.net-bs/css/dataTables.bootstrap.min.css') }}">
@endpush

<section class="content">
    <div class="row">
        <div class="box-footer mb-3">
            <a href="{{ route('berita.create') }}" class="btn btn-primary"><i data-feather="plus"></i> CREATE NEW</a>
            <a href="{{ route('katberita.index') }}" class="btn btn-success"><i data-feather="eye"></i> SEE ALL KATEGORI</a>
        </div>
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body">
                    <table id="category-table" class="table table-light table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th class="text-center">#</th>
                                <th class="text-center">Gambar</th>
                                <th class="text-center">Judul</th>
                                <th class="text-center">Prodi</th>
                                <th class="text-center">Detail</th>
                                <th class="text-center">Kategori</th>
                                <th class="text-center">Status</th>
                                <th class="text-center">Unggulan</th>
                                <th class="text-center">View</th>
                                <th class="text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($newslist as $index => $news)
                            <tr>
                                <th scope="row">{{ $index + 1 }}</th>
                                <td align="center">
                                    <img src="{{ asset('img/news/'.$news->image) }}" alt="{{ $news->title }}" class="card-img rounded w-25">
                                </td>
                                <td>{{ Str::limit(strip_tags($news->title),20) }}</td>
                                <td>{{ $news->prodi->name }}</td>
                                <td>{{ Str::limit(strip_tags($news->details1),30) }}</td>
                                <td>{{ $news->katberita->name }}</td>
                                <td>{{ $news->status ? 'Published' : 'Unpublished' }}</td>
                                <td>{{ $news->featured ? 'Featured' : '' }}</td>
                                <td>{{ $news->view_count }}</td>
                                <td align="center">
                                    <div class="btn-group">
                                        {{-- <a href="" class="btn btn-primary btn-flat"><i class="fa fa-eye"></i></a> --}}
                                        <a href="{{ route('berita.edit',$news->id) }}" class="btn btn-warning mr-2"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                        <hr>
                                        <a href="javascript:void(0)" class="btn btn-danger"
                                            onclick="event.preventDefault();
                                                document.getElementById('news-delete-form-{{$news->id}}').submit();">
                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                        </a>
                                        <form id="news-delete-form-{{$news->id}}" action="{{ route('berita.destroy',$news->id) }}" method="POST" style="display: none;">
                                            @csrf 
                                            @method('DELETE')
                                        </form>
                                    </div>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>

@endsection

@push('scripts')
    <script src="{{ asset('backend/components/datatables.net/js/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('backend/components/datatables.net-bs/js/dataTables.bootstrap.min.js') }}"></script>
    <script>
        $(function(){
            $('#category-table').DataTable();
        })
    </script>
@endpush