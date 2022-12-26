@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/plugins/iCheck/square/blue.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/components/select2/dist/css/select2.min.css') }}">
@endpush

<section class="content">
    <div class="row">

        <form action="{{ route('download.update',$download->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <div class="col-md-6">
                <div class="box box-primary">
                    <div class="box-body">
                        <div class="form-group">
                            <label for="newstitle">File Name</label>
                            <input type="text" name="name" class="form-control" value="{{ $download->name }}" id="newstitle" required>
                        </div>
                        <div class="form-group mb-2">
                            <label>Prodi</label>
                            <select name="prodi_id" required class="form-select" style="width: 100%;">
                                <option selected aria-required="true">Pilih Prodi</option>
                                @foreach($prodi as $p)
                                    <option value="{{ $p->id }}">{{ $p->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="newsimage">File</label>
                            <input type="file" name="file" id="file" required>
                            <p class="help-block">(file must be in .pdf format)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box-footer">
                <button type="submit" class="btn btn-primary btn-flat"><i class="fa fa-check" aria-hidden="true"></i> Save</button>
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