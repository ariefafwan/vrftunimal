@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/plugins/iCheck/square/blue.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/components/select2/dist/css/select2.min.css') }}">
@endpush

<section class="content">
    <div class="row">

        <form action="{{ route('katberita.update',$katberita->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <div class="col-md-6 mb-2">
                <div class="box box-primary">
                    <div class="box-body">
                        <div class="form-group">
                            <label for="katberita">Nama Kategori</label>
                            <input type="text" name="name" class="form-control" id="katberita" required>
                            <input type="hidden" name="status" class="form-control" value="1" id="katberita" required>
                        </div>
                    </div>
                </div>
            </div>
                <div class="box-footer">
                        <button type="submit" class="btn btn-primary btn-flat">UPDATE</button>
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