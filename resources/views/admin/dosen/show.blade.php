@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/components/datatables.net-bs/css/dataTables.bootstrap.min.css') }}">
@endpush

<div class="row">
    <div class="col-lg-12">
        <div class="box">
            <div class="box-header with-border">
                <div class="btn-group mb-3">
                    <a href="{{ route('dosen.create') }}" class="btn btn-success btn-xs btn-flat"><i data-feather="plus"></i>Tambah</a>
                </div>
                <form action="/showdosen">
                    <div class="col" style="width: 20%">
                    {{-- <select class="form-select" name="search" id="search">
                      @foreach ($prodi as $row)
                        <option value="{{ $row->name }}">{{ $row->name }}</option>
                      @endforeach
                    </select> --}}
                    <input type="text" class="form-control mb-3" name="search" id="search">
                    </div>
                    <button class="btn btn-primary mb-3" style="widht: 200%" type="submit">Search</button>
                </form>
            </div>
            <div class="box-body table-responsive bg-light">
                    <table class="table table-stiped table-bordered">
                        <thead>
                            <th width="5%">No</th>
                            <th width="15%">Foto</th>
                            <th>Nama</th>
                            <th>Prodi</th>
                            <th>NIP/NIDN</th>
                            <th>Aksi</th>
                        </thead>
                        <tbody>
                            @foreach($dosen as $index => $row)
                            <tr>
                                <th scope="row">{{ $index + 1 }}</th>
                                <td align="center">
                                    <img src="{{ asset('img/profil/'.$row->profile_img) }}" alt="{{ $row->name }}" class="card-img rounded w-25">
                                </td>
                                <td>{{ $row->name }}</td>
                                <td>{{ $row->prodi->name }}</td>
                                <td>{{ $row->nip }} / {{ $row->nidn }}</td>
                                <td align="center">
                                    <div class="btn-group">
                                        <a href="{{ route('dosen.edit',$row->id) }}" class="btn btn-warning mr-2"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                        <hr>
                                        <a href="javascript:void(0)" class="btn btn-danger"
                                            onclick="event.preventDefault();
                                                document.getElementById('dosen-delete-form-{{$row->id}}').submit();">
                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                        </a>
                                        <form id="dosen-delete-form-{{$row->id}}" action="{{ route('dosen.destroy',$row->id) }}" method="POST" style="display: none;">
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