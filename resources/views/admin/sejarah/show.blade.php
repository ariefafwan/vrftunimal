@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/plugins/iCheck/square/blue.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/components/select2/dist/css/select2.min.css') }}">
@endpush

<section class="content">
    <div class="row">
            <div class="col-md-6 mb-2">
                <div class="box box-primary">
                    <div class="box-body">
                        <div class="form-group">
                            <label for="prodi">Prodi</label>
                            <input type="text" name="name" class="form-control" id="prodi" value="{{ $sejarah->prodi->name }}" readonly required>
                        </div>
                        <div class="form-group">
                            <label for="prodi">Detail 1</label>
                            <textarea rows="5" class="form-control" id="floatingTextarea" readonly>{{ $sejarah->details1 }}</textarea>
                        </div>
                        <div class="form-group">
                            <label for="prodi">Detail 2</label>
                            <input type="text" name="name" class="form-control" id="prodi" value="{{ $sejarah->details2 }}" readonly required>
                        </div>
                        <div class="form-group">
                            <label for="prodi">Detail 3</label>
                            <input type="text" name="name" class="form-control" id="prodi" value="{{ $sejarah->details3 }}" readonly required>
                        </div>
                        <div class="form-group">
                            <label for="prodi">Detail 4</label>
                            <input type="text" name="name" class="form-control" id="prodi" value="{{ $sejarah->details4 }}" readonly required>
                        </div>
                        <div class="form-group">
                            <label for="prodi">Detail 5</label>
                            <input type="text" name="name" class="form-control" id="prodi" value="{{ $sejarah->details5 }}" readonly required>
                        </div>
                    </div>
                </div>
            </div>
                <div class="box-footer">
                    <a href="{{ route('sejarahprodi.edit',$sejarah->id) }}" class="btn btn-warning btn-flat mr-2"><i class="fa fa-pencil" aria-hidden="true"></i>Edit </a>
                </div>
                </div>
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