@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/plugins/iCheck/square/blue.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/components/select2/dist/css/select2.min.css') }}">
@endpush

<section class="content">
    <div class="row">

        <form action="{{ route('berita.store') }}" method="POST" enctype="multipart/form-data" role="form">
            @csrf

            <div class="col-md-6">
                <div class="box box-primary">
                    <div class="box-body">
                        <div class="form-group">
                            <label for="newstitle">Title</label>
                            <input type="text" name="title" class="form-control" id="newstitle" required>
                        </div>
                        <div class="form-group">
                            <label>Paragraph 1</label>
                            <textarea class="textarea" name="details1" placeholder="Place some text here" style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;" required></textarea>
                        </div>
                        <div class="form-group">
                            <label>Paragraph 2</label>
                            <textarea class="textarea" name="details2" placeholder="Place some text here (nulable)" style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;" required></textarea>
                        </div>
                        <div class="form-group">
                            <label>Paragraph 3</label>
                            <textarea class="textarea" name="details3" placeholder="Place some text here (nulable)" style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;" required></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="box box-primary">
                    <div class="box-body">
                        <div class="form-group">
                            <label>Categories</label>
                            <select name="katberita_id" class="form-select" style="width: 100%;" required>
                                <option selected>Pilih Kategori</option>
                                @foreach($categories as $category)
                                <option value="{{ $category->id }}">{{ $category->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Prodi</label>
                            <select name="prodi_id" class="form-select" style="width: 100%;" required>
                                <option selected>Pilih Prodi</option>
                                @foreach($prodi as $p)
                                    <option value="{{ $p->id }}">{{ $p->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <hr>
                        <div class="form-group">
                            <label for="newsimage">Featured Image</label>
                            <input type="file" name="image" id="newsimage" required>
                            <p class="help-block">(Image must be in .png or .jpg format)</p>
                        </div>
                        <hr>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="status"> Published
                            </label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="featured"> Featured
                            </label>
                        </div>
                    </div>

                    <div class="box-footer">
                        <button type="submit" class="btn btn-primary btn-flat">CREATE</button>
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