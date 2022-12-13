@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/components/datatables.net-bs/css/dataTables.bootstrap.min.css') }}">
@endpush

<section class="content">
    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body">
                    <table id="category-table" class="table table-light table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th width="2%">No</th>
                                <th class="text-center" width="14%">Prodi</th>
                                <th class="text-center">Detail</th>
                                <th class="text-center" width="7%">Aksi</th>
                            </tr>
                        </thead>

                        <tbody>
                            @foreach($sejarah as $index => $row)
                            <tr align="left">
                                <th scope="row">{{ $index + 1 }}</th>
                                <td>{{ $row->prodi->name }}</td>
                                <td>{{ Str::limit(strip_tags($row->details1),50) }}</td>
                                <td>
                                    <div class="btn-group">
                                        <a href="{{ route('sejarahprodi.show',$row->id) }}" class="btn btn-primary btn-flat mr-2"><i class="fa fa-eye" aria-hidden="true"></i></a>
                                        <hr>
                                        <a href="{{ route('sejarahprodi.edit',$row->id) }}" class="btn btn-warning btn-flat mr-2"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                        <hr>
                                    </div>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>

                        {{-- <tfoot>
                            <tr>
                                <th>Nomor</th>
                                <th>Nama Prodi</th>
                                <th>Aksi</th>
                            </tr>
                        </tfoot> --}}
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