@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/components/datatables.net-bs/css/dataTables.bootstrap.min.css') }}">
@endpush

<section class="content">
    <div class="row">
        <div class="box-footer mb-3">
            <a href="{{ route('prestasiprodi.create') }}" class="btn btn-primary"><i class="fa fa-plus" aria-hidden="true"></i> CREATE NEW</a>
        </div>
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body">
                    <table id="category-table" class="table table-light table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th class="text-center">No</th>
                                <th class="text-center">Nama Mahasiswa</th>
                                <th class="text-center">NIM</th>
                                <th class="text-center">Prodi</th>
                                <th class="text-center">Prestasi</th>
                                <th class="text-center">Tingkat/Tahun</th>
                                <th class="text-center">Event</th>
                                <th class="text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($prestasi as $index => $row)
                            <tr>
                                <th scope="row">{{ $index + 1 }}</th>
                                <td>{{ $row->mahasiswa }}</td>
                                <td>{{ $row->nim }}</td>
                                <td>{{ $row->prodi->name }}</td>
                                <td>{{ $row->prestasi }}</td>
                                <td>{{ $row->tingkat }} / {{ $row->tahun }}</td>
                                <td>{{ Str::limit(strip_tags($row->event),30) }}</td>
                                <td align="center">
                                    <div class="btn-group">
                                        <a href="{{ route('prestasiprodi.show',$row->id) }}" class="btn btn-primary mr-2"><i class="fa fa-eye" aria-hidden="true"></i></a>
                                        <a href="{{ route('prestasiprodi.edit',$row->id) }}" class="btn btn-warning mr-2"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                        <a href="javascript:void(0)" class="btn btn-danger"
                                            onclick="event.preventDefault();
                                                document.getElementById('news-delete-form-{{$row->id}}').submit();">
                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                        </a>
                                        <form id="news-delete-form-{{$row->id}}" action="{{ route('prestasiprodi.destroy',$row->id) }}" method="POST" style="display: none;">
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