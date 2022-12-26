@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/components/datatables.net-bs/css/dataTables.bootstrap.min.css') }}">
@endpush

<section class="content">
    <div class="container rounded bg-white mt-3 mb-1">
      <form action="{{ route('pimpinan.update', $pimpinan->id) }}" method="POST" enctype="multipart/form-data" role="form">
            @csrf
            @method('PUT')
        <div class="row">
            <div class="col-md-3 border-right">
                <div class="d-flex flex-column align-items-center text-center p-5 py-7"><img class="rounded-circle mt-5" width="150px" src="{{ asset('img/profil/pimpinan/'.$pimpinan->profile_img) }}">
                    <span class="font-weight-bold">{{ $pimpinan->name }}</span>
                </div>
                <div class="col-md-12">
                    <input type="file" id="profile_img" name="profile_img" class="form-control align-item center" value="{{ $pimpinan->profile_img }}" required>
                </div>
            </div>
            <div class="col-md-8 border-right">
                <div class="p-5 py-7">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4 class="text-right">Edit Pimpinan</h4>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-12">
                            <label class="labels">Nama</label>
                            <input type="text" class="form-control" id="name" name="name" placeholder="name" value="{{ $pimpinan->name }}" required>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label class="labels">NIP</label>
                            <input type="number" name="nip" id="nip" class="form-control" value="{{ $pimpinan->nip }}" required>
                        </div>
                        <div class="col-md-12">
                            <label class="labels">NIDN</label>
                            <input type="number" name="nidn" id="nidn" class="form-control" value="{{ $pimpinan->nidn }}" required>
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Jabatan</label>
                            <input type="text" name="jabatan" id="jabatan" class="form-control" value="{{ $pimpinan->jabatan }}" required readonly>
                        </div>
                    </div>
                    <div class="mt-5 text-center">
                        <button class="btn btn-primary profile-button" type="submit">Save</button>
                    </div>
                </div>
            </div>
        </div>
      </form>
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