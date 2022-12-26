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
                                <th class="text-center">#</th>
                                <th class="text-center">Name</th>
                                <th class="text-center">Prodi</th>
                                <th class="text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($akred as $index => $d)
                            <tr>
                                <th scope="row">{{ $index + 1 }}</th>
                                <td>{{ $d->name }}</td>
                                <td>{{ $d->prodi->name }}</td>
                                <td align="center">
                                    <div class="btn-group">
                                        <a href="/file/akreditasi/{{ $d->file }}" class="btn btn-primary mr-2"><i class="fa fa-download" aria-hidden="true"></i></a>
                                        <hr>
                                        <a href="{{ route('akred.edit',$d->id) }}" class="btn btn-warning mr-2"><i class="fa fa-pencil" aria-hidden="true"></i></a>
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