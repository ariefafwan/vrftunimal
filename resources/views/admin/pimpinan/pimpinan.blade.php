@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/components/datatables.net-bs/css/dataTables.bootstrap.min.css') }}">
@endpush

<section class="content">
<div class="container-fluid text-center">
  <div class="row justify-content-flex-start">
    <div class="row">
    @foreach ($pimpinan as $row)
        <div class="col-sm-12">
            <h4>{{ $row->jabatan }}</h4>
        </div>
        <div class="col-sm-3">
            <img src="{{ asset('img/profil/pimpinan/'.$row->profile_img) }}" alt="{{ $row->name }}" class="img-thumbnail image-responsive" style="width: 80%; height: 220px;">
        </div>
        <div class="col-sm-9">
            <table class="table">
            <tbody>
                <tr>
                <td width="130">Nama</td>
                <td width="5">:</td>
                <td>{{ $row->name }}</td>
                </tr>
                <tr>
                <td>NIP</td><td>:</td>
                <td>{{ $row->nip }}</td>
                </tr>
                <tr>
                <td>NIDN</td><td>:</td>
                <td>{{ $row->nidn }}</td>
                </tr>
                <tr>
                <td align="center">
                    <div class="btn-group">
                        <a href="{{ route('pimpinan.edit',$row->id) }}" class="btn btn-warning mr-2"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                        <hr>
                    </div>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
        <hr>
    @endforeach
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
