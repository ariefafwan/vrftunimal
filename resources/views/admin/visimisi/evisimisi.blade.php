@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/plugins/iCheck/square/blue.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/components/select2/dist/css/select2.min.css') }}">
@endpush

<section class="content">
    <div class="row mb-3">
        <div class="col-auto">
            <input type="text" name="details3" class="form-control" id="prodi" value="{{ $visimisi->prodi->name }}" readonly required>
        </div>
    </div>

    <form action="{{ route('visimisiprodi.update',$visimisi->id) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        <div class="box-footer mt-1 mb-2">
            <button type="submit" class="btn btn-primary btn-flat"><i class="fa fa-pencil-square" aria-hidden="true"></i> UPDATE</button>
        </div>

        <div class="row border-top">
            <div class="col-md-3 border-right">
                <div class="p-3 py-5">
                    <div class="row mt-2">
                    <div class="col-md-12 text-center mb-3">
                        <h4 class="labels mb-2">Visi</h4>
                        <textarea rows="6" class="form-control" name="visi" required id="floatingTextarea">{{ $visimisi->visi }}</textarea>
                    </div>
                    </div>
                    <div class="col-md-12 text-center mb-3">
                        <h4 class="labels mb-2">Misi</h4>
                        <textarea rows="6" class="form-control mb-3" name="misi1" required id="floatingTextarea">{{ $visimisi->misi1 }}</textarea>
                        <textarea rows="6" class="form-control mb-3" name="misi2" required id="floatingTextarea">{{ $visimisi->misi2 }}</textarea>
                        <textarea rows="6" class="form-control mb-3" name="misi3" required id="floatingTextarea">{{ $visimisi->misi3 }}</textarea>
                        <textarea rows="6" class="form-control mb-3" name="misi4" required id="floatingTextarea">{{ $visimisi->misi4 }}</textarea>
                        <label class="labels mb-2">(Optional/Nullable)</label>
                        <textarea rows="6" class="form-control mb-3" name="misi5" id="floatingTextarea">{{ $visimisi->misi5 }}</textarea>
                        <textarea rows="6" class="form-control mb-3" name="misi6" id="floatingTextarea">{{ $visimisi->misi6 }}</textarea>
                    </div>
                </div>
            </div>
            <div class="col-md-5 border-right">
                <div class="p-3 py-5">
                    <div class="row mt-2">
                    <div class="col-md-12 text-center">
                        <h4 class="labels mb-2">Tujuan</h4>
                        <textarea rows="6" class="form-control mb-3" name="tujuan1" required id="floatingTextarea">{{ $visimisi->tujuan1 }}</textarea>
                        <textarea rows="6" class="form-control mb-3" name="tujuan2" required id="floatingTextarea">{{ $visimisi->tujuan2 }}</textarea>
                        <textarea rows="6" class="form-control mb-3" name="tujuan3" required id="floatingTextarea">{{ $visimisi->tujuan3 }}</textarea>
                        <textarea rows="6" class="form-control mb-3" name="tujuan4" required id="floatingTextarea">{{ $visimisi->tujuan4 }}</textarea>
                        <label class="labels mb-2">(Optional/Nullable)</label>
                        <textarea rows="6" class="form-control mb-3" name="tujuan5" id="floatingTextarea">{{ $visimisi->tujuan5 }}</textarea>
                        <textarea rows="6" class="form-control mb-3" name="tujuan6" id="floatingTextarea">{{ $visimisi->tujuan6 }}</textarea>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="p-3 py-5">
                    <div class="row mt-2">
                    <div class="col-md-12 text-center">
                        <h4 class="labels mb-2">Sasaran</h4>
                        <textarea rows="6" class="form-control mb-3" name="sasaran1" required id="floatingTextarea">{{ $visimisi->sasaran1 }}</textarea>
                        <textarea rows="6" class="form-control mb-3" name="sasaran2" required id="floatingTextarea">{{ $visimisi->sasaran2 }}</textarea>
                        <textarea rows="6" class="form-control mb-3" name="sasaran3" required id="floatingTextarea">{{ $visimisi->sasaran3 }}</textarea>
                        <textarea rows="6" class="form-control mb-3" name="sasaran4" required id="floatingTextarea">{{ $visimisi->sasaran4 }}</textarea>
                        <textarea rows="6" class="form-control mb-3" name="sasaran5" required id="floatingTextarea">{{ $visimisi->sasaran5 }}</textarea>
                        <label class="labels mb-2">(Optional/Nullable)</label>
                        <textarea rows="6" class="form-control mb-3" name="sasaran6" id="floatingTextarea">{{ $visimisi->sasaran6 }}</textarea>
                        <textarea rows="6" class="form-control mb-3" name="sasaran7" id="floatingTextarea">{{ $visimisi->sasaran7 }}</textarea>
                        <textarea rows="6" class="form-control mb-3" name="sasaran8" id="floatingTextarea">{{ $visimisi->sasaran8 }}</textarea>
                        <textarea rows="6" class="form-control mb-3" name="sasaran9" id="floatingTextarea">{{ $visimisi->sasaran9 }}</textarea>
                        <textarea rows="6" class="form-control mb-3" name="sasaran10" id="floatingTextarea">{{ $visimisi->sasaran10 }}</textarea>
                        <textarea rows="6" class="form-control mb-3" name="sasaran11" id="floatingTextarea">{{ $visimisi->sasaran11 }}</textarea>
                        <textarea rows="6" class="form-control mb-3" name="sasaran12" id="floatingTextarea">{{ $visimisi->sasaran12 }}</textarea>
                        <textarea rows="6" class="form-control mb-3" name="sasaran13" id="floatingTextarea">{{ $visimisi->sasaran13 }}</textarea>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
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