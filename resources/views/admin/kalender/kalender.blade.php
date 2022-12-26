@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/components/datatables.net-bs/css/dataTables.bootstrap.min.css') }}">
@endpush

<section class="content">
    <div class="btn-group mb-3">
        <a href="{{ route('kalenderakademik.create') }}" class="btn btn-primary"><i class="fa fa-plus" aria-hidden="true"></i> CREATE NEW</a>
    </div>

    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body">
                    <table id="category-table" class="table table-light table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th class="text-center">#</th>
                                <th class="text-center">Name</th>
                                <th class="text-center">File</th>
                                <th class="text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($kalender as $index => $k)
                            <tr>
                                <th scope="row">{{ $index + 1 }}</th>
                                <td>{{ $k->name }}</td>
                                <td>{{ $k->file }}</td>
                                <td align="center">
                                    <div class="btn-group">
                                        <a href="/file/kalender/{{ $k->file }}" class="btn btn-primary mr-2"><i class="fa fa-download" aria-hidden="true"></i></a>
                                        <hr>
                                        <a href="{{ route('kalenderakademik.edit',$k->id) }}" class="btn btn-warning mr-2"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                        <hr>
                                        <a href="javascript:void(0)" class="btn btn-danger"
                                            onclick="event.preventDefault();
                                                document.getElementById('news-delete-form-{{$k->id}}').submit();">
                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                        </a>
                                        <form id="news-delete-form-{{$k->id}}" action="{{ route('download.destroy',$k->id) }}" method="POST" style="display: none;">
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