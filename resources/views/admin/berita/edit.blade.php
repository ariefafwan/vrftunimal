@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/plugins/iCheck/square/blue.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/components/select2/dist/css/select2.min.css') }}">
@endpush

<section class="content">
    <div class="row">

        <form action="{{ route('berita.update',$news->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <div class="col-md-6">
                <div class="box box-primary">
                    <div class="box-body">
                        <div class="form-group">
                            <label for="newstitle">Title</label>
                            <input type="text" name="title" class="form-control" value="{{ $news->title }}" id="newstitle">
                        </div>
                        <div class="form-group">
                            <label>Paragraph 1</label>
                            <textarea class="textarea" name="details1" placeholder="Place some text here (nulable)" style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;">
                                {{ $news->details1 }}
                            </textarea>
                        </div>
                        <div class="form-group">
                            <label>Paragraph 2</label>
                            <textarea class="textarea" name="details2" placeholder="Place some text here (nulable)" style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;">
                                {{ $news->details2 }}
                            </textarea>
                        </div>
                        <div class="form-group">
                            <label>Paragraph 3</label>
                            <textarea class="textarea" name="details3" placeholder="Place some text here (nulable)" style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;">
                                {{ $news->details3 }}
                            </textarea>
                        </div>
                        <div class="form-group">
                            <label>Paragraph 4</label>
                            <textarea class="textarea" name="details4" placeholder="Place some text here (nulable)" style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;">
                                {{ $news->details4 }}
                            </textarea>
                        </div>
                        <div class="form-group">
                            <label>Paragraph 5</label>
                            <textarea class="textarea" name="details5" placeholder="Place some text here (nulable)" style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;">
                                {{ $news->details5 }}
                            </textarea>
                        </div>
                        <div class="form-group">
                            <label>Paragraph 6</label>
                            <textarea class="textarea" name="details6" placeholder="Place some text here (nulable)" style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;">
                                {{ $news->details6 }}
                            </textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="box box-primary">
                    <div class="box-body">
                        <div class="form-group">
                            <label>Categories</label>
                            <select name="katberita_id" class="form-control select2" style="width: 100%;">
                                @foreach($categories as $category)
                                    <option value="{{ $category->id }}" @if($category->id == $news->katberita_id) {{'selected'}} @endif>{{ $category->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Prodi</label>
                            <select name="prodi_id" class="form-select" style="width: 100%;">
                                @foreach($prodi as $p)
                                <option value="{{ $p->id }}" @if($p->id == $news->prodi_id) {{'selected'}} @endif>{{ $p->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <hr>
                        {{-- <div class="box-body">
                            <img src="{{ asset('img/news/'.$news->image) }}" alt="{{ $news->title }}" class="img-responsive">
                        </div> --}}
                        <div class="form-group">
                            <label for="image">Featured Image</label>
                            <input type="file" name="image" id="image">
                            <p class="help-block">(Image must be in .png or .jpg format)</p>
                        </div>
                        <hr>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="status" {{ $news->status ? 'checked' : '' }}> Published
                            </label>
                        </div>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="featured" {{ $news->featured ? 'checked' : '' }}> Featured
                            </label>
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
    <script src="{{ asset('backend/plugins/iCheck/icheck.min.js') }}"></script>
    <script src="{{ asset('backend/components/select2/dist/js/select2.full.min.js') }}"></script>
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