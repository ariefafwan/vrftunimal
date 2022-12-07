@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/plugins/iCheck/square/blue.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/components/select2/dist/css/select2.min.css') }}">
@endpush

<section class="content">
    <div class="row">
        
        <form action="{{ route('sejarahprodi.update',$sejarah->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <div class="col-md-6 mb-2">
                <div class="box box-primary">
                    <div class="box-body">
                        <div class="form-group mb-2">
                            <label for="prodi">Prodi</label>
                            <input type="text" class="form-control" id="prodi" value="{{ $sejarah->prodi->name }}" readonly required>
                        </div>
                        <input type="hidden" name="prodi_id" class="form-control" id="prodi" value="{{ $sejarah->prodi_id }}" readonly required>
                        </div>
                        <div class="form-group mb-2">
                            <label for="prodi">Detail 1</label>
                            <textarea rows="5" class="form-control" name="details1" id="floatingTextarea">{{ $sejarah->details1 }}</textarea>
                        </div>
                        <div class="form-group mb-2">
                            <label for="prodi">Detail 2 (Optional)</label>
                            <input type="text" name="details2" class="form-control" id="prodi" value="{{ $sejarah->details2 }}" required>
                        </div>
                        <div class="form-group mb-2">
                            <label for="prodi">Detail 3 (Optional)</label>
                            <input type="text" name="details3" class="form-control" id="prodi" value="{{ $sejarah->details3 }}" required>
                        </div>
                        <div class="form-group mb-2">
                            <label for="prodi">Detail 4 (Optional)</label>
                            <input type="text" name="details4" class="form-control" id="prodi" value="{{ $sejarah->details4 }}" required>
                        </div>
                        <div class="form-group mb-2">
                            <label for="prodi">Detail 5 (Optional)</label>
                            <input type="text" name="details5" class="form-control" id="prodi" value="{{ $sejarah->details5 }}" required>
                        </div>
                    </div>
                </div>
            </div>
                <div class="box-footer mt-1 mb-2">
                    <button type="submit" class="btn btn-primary btn-flat"><i class="fa fa-pencil-square" aria-hidden="true"></i> UPDATE</button>
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