@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/plugins/iCheck/square/blue.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/components/select2/dist/css/select2.min.css') }}">
@endpush

<section class="content">
    <div class="row">

        <form action="{{ route('dosen.update',$dosen->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <div class="col-md-6">
                <div class="box box-primary">
                    <div class="box-body">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" name="name" class="form-control" id="name" value="{{ $dosen->name }}" required>
                        </div>
                        <div class="form-group">
                            <label for="name">Program Studi</label>
                            <input type="hidden" name="prodi_id" class="form-control" id="prodi_id" value="{{ $dosen->prodi_id }}" required readonly>
                            <input type="text" name="asal" class="form-control" id="name" value="{{ $dosen->prodi->name }}" required readonly>
                        </div>
                        <div class="form-group">
                            <label for="nip">NIP</label>
                            <input type="text" name="nip" class="form-control" id="nip" value="{{ $dosen->nip }}" required>
                        </div>
                        <div class="form-group">
                            <label for="newstitle">NIDN</label>
                            <input type="text" name="nidn" class="form-control" id="nidn" value="{{ $dosen->nidn }}" required>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="box box-primary">
                    <div class="box-body">
                        <div class="form-group">
                            <label for="profile_img">Profile Image</label>
                            <input type="file" name="profile_img" id="profile_img" value="{{ $dosen->profile_img }}" required>
                            <p class="help-block">(Image must be in .png or .jpg format)</p>
                        </div>
                    </div>

                    <div class="box-footer">
                        <button type="submit" class="btn btn-success btn-flat">UPDATE</button>
                    </div>
                </div>
            </div>

        </form>

    </div>
</section>

@endsection

@push('scripts')
    <!-- iCheck -->
    <script src="{{ asset('plugins/iCheck/icheck.min.js') }}"></script>
    <script src="{{ asset('components/select2/dist/js/select2.full.min.js') }}"></script>
    <script>
        $(function () {

            $('.select2').select2();

            $('input').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue'
            });

            $('.textarea').wysihtml5();
        });
    </script>
@endpush