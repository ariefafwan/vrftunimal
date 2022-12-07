@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/plugins/iCheck/square/blue.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/components/select2/dist/css/select2.min.css') }}">
@endpush

<section class="content">
    <div class="row">
            <div class="col-md-6">
                <div class="box box-primary">
                    <div class="box-body">
                        <div class="form-group">
                            <label for="newstitle">Nama Mahasiswa</label>
                            <input type="text" name="mahasiswa" class="form-control" id="newstitle" value="{{ $prestasi->mahasiswa }}" required readonly>
                        </div>
                        <div class="form-group">
                            <label for="newstitle">NIM</label>
                            <input type="number" name="nim" class="form-control" id="newstitle" value="{{ $prestasi->nim }}" required readonly>
                        </div>
                        <div class="form-group">
                            <label>Prodi</label>
                            <input type="number" name="nim" class="form-control" id="newstitle" value="{{ $prestasi->prodi->name }}" required readonly>
                        </div>
                        <div class="form-group">
                            <label for="newstitle">Prestasi</label>
                            <input type="text" name="name" class="form-control" value="{{ $prestasi->prestasi }}" id="newstitle" required readonly>
                        </div>
                        <div class="form-group">
                            <label>Tingkat</label>
                            <input type="text" name="name" class="form-control" value="{{ $prestasi->tingkar }}" id="newstitle" required readonly>
                        </div>
                        <div class="form-group">
                            <label for="newstitle">Tahun</label>
                            <input type="number" name="tahun" class="form-control" value="{{ $prestasi->tahun }}" id="newstitle" readonly required>
                        </div>
                        <div class="form-group">
                            <label>Event</label>
                            <textarea class="textarea" name="deskripsi" placeholder="Place some text here" style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;" required readonly>{{ $prestasi->event }}</textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box-footer">
              <a href="{{ route('prestasiprodi.edit',$prestasi->id) }}" class="btn btn-warning mr-2"><i class="fa fa-pencil" aria-hidden="true"></i> UPDATE</a>
            </div>
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