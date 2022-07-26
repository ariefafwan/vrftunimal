@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/components/datatables.net-bs/css/dataTables.bootstrap.min.css') }}">
@endpush

<section class="content">
    <div class="row">
        <h6>
            <small><a href="{{ route('berita.create') }}" class="btn btn-block btn-xs btn-success btn-flat"><i class="fa fa-plus"></i> CREATE NEW</a></small>
        </h6>
        <div class="col-xs-12">
            <div class="box">
                {{-- <div class="box-header">
                    <h3 class="box-title">Data Table</h3>
                </div> --}}

                <div class="box-body">
                    <table id="category-table" class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Prodi</th>
                                <th>Details</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Is Featured</th>
                                <th>View</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            @foreach($newslist as $news)
                            <tr>
                                <td>{{ $news->id }}</td>
                                <td>
                                    <img src="{{ asset('img/news/'.$news->image) }}" alt="{{ $news->title }}" class="card-img rounded w-75">
                                </td>
                                <td>{{ $news->title }}</td>
                                <td>{{ $news->prodi->name }}</td>
                                <td>{{ Str::limit(strip_tags($news->details),300) }}</td>
                                <td>{{ $news->katberita->name }}</td>
                                <td>{{ $news->status ? 'Published' : 'Unpublished' }}</td>
                                <td>{{ $news->featured ? 'Featured' : '' }}</td>
                                <td>{{ $news->view_count }}</td>
                                <td>
                                    <div class="btn-group-row">
                                        {{-- <a href="" class="btn btn-primary btn-flat"><i class="fa fa-eye"></i></a> --}}
                                        <a href="{{ route('berita.edit',$news->id) }}" class="btn btn-warning btn-flat"><i data-feather="eye"></i></a>
                                        <hr>
                                        <a href="javascript:void(0)" class="btn btn-danger btn-flat"
                                            onclick="event.preventDefault();
                                                document.getElementById('news-delete-form-{{$news->id}}').submit();">
                                            <i data-feather="trash"></i>
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

                        <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Prodi</th>
                                <th>Details</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Is Featured</th>
                                <th>View</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
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