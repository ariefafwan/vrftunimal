@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/plugins/iCheck/square/blue.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/components/select2/dist/css/select2.min.css') }}">
@endpush

<section class="content">
    <div class="row">

        <form action="{{ route('prestasiprodi.store') }}" method="POST" enctype="multipart/form-data" role="form">
            @csrf

            <div class="col-md-6">
                <div class="box box-primary">
                    <div class="box-body">
                        <div class="form-group">
                            <label for="newstitle">Nama Mahasiswa</label>
                            <input type="text" name="mahasiswa" class="form-control" id="newstitle" required>
                        </div>
                        <div class="form-group">
                            <label for="newstitle">NIM</label>
                            <input type="number" name="nim" class="form-control" id="newstitle" required>
                        </div>
                        <div class="form-group">
                            <label>Prodi</label>
                            <select name="prodi_id" required class="form-select" style="width: 100%;">
                                <option selected aria-required="true">Pilih Prodi</option>
                                @foreach($prodi as $p)
                                    <option value="{{ $p->id }}">{{ $p->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="newstitle">Prestasi</label>
                            <input type="text" name="prestasi" placeholder="Juara ......." class="form-control" id="newstitle" required>
                        </div>
                        <div class="form-group">
                            <label>Tingkat</label>
                            <select name="tingkat" aria-required="true" required class="form-select" style="width: 100%;">
                                <option selected aria-required="true">-- Pilih Kategori --</option>
                                <option>Internasional</option>
                                <option>Nasional</option>
                                <option>Provinsi</option>
                                <option>Kabupaten/Kota</option>
                                <option>Regional</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="newstitle">Tahun</label>
                            <input type="number" name="tahun" class="form-control" id="newstitle" required>
                        </div>
                        <div class="form-group">
                            <label>Event</label>
                            <textarea class="textarea" name="event" placeholder="Place some text here" style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;" required></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box-footer">
                <button type="submit" class="btn btn-primary btn-flat"><i class="fa fa-plus" aria-hidden="true"></i> CREATE</button>
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