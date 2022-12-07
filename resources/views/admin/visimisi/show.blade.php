@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/plugins/iCheck/square/blue.css') }}">
    <link rel="stylesheet" href="{{ asset('backend/components/select2/dist/css/select2.min.css') }}">
@endpush

<section class="content">
    <div class="row g-2 mb-3">
        <div class="col-auto">
            <input type="text" name="details3" class="form-control" id="prodi" value="{{ $visimisi->prodi->name }}" readonly required>
        </div>
        <div class="col-auto">
            <a href="{{ route('visimisiprodi.edit',$visimisi->id) }}" class="btn btn-warning btn-flat mr-2"><i class="fa fa-pencil" aria-hidden="true"></i>Edit</a>
        </div>
    </div>
        <div class="row border-top">
            <div class="col-md-3 border-right">
                <div class="p-3 py-5">
                    <div class="row mt-2">
                    <div class="col-md-12 text-center mb-3">
                        <h4 class="labels mb-2">Visi</h4>
                        <p align="justify" class="text text-dark">{{ $visimisi->visi }}</p>
                    </div>
                    </div>
                    <div class="col-md-12 text-center mb-3">
                        <h4 class="labels mb-2">Misi</h4>
                        <p align="justify" class="text text-dark">{{ $visimisi->misi1 }}</p>
                        <p align="justify" class="text text-dark">{{ $visimisi->misi2 }}</p>
                        <p align="justify" class="text text-dark">{{ $visimisi->misi3 }}</p>
                        <p align="justify" class="text text-dark">{{ $visimisi->misi4 }}</p>
                        <p align="justify" class="text text-dark">{{ $visimisi->misi5 }}</p>
                        <p align="justify" class="text text-dark">{{ $visimisi->misi6 }}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-5 border-right">
                <div class="p-3 py-5">
                    <div class="row mt-2">
                    <div class="col-md-12 text-center">
                        <h4 class="labels mb-2">Tujuan</h4>
                        <p align="justify" class="text text-dark">{{ $visimisi->tujuan1 }}</p>
                        <p align="justify" class="text text-dark">{{ $visimisi->tujuan2 }}</p>
                        <p align="justify" class="text text-dark">{{ $visimisi->tujuan3 }}</p>
                        <p align="justify" class="text text-dark">{{ $visimisi->tujuan4 }}</p>
                        <p align="justify" class="text text-dark">{{ $visimisi->tujuan5 }}</p>
                        <p align="justify" class="text text-dark">{{ $visimisi->tujuan6 }}</p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="p-3 py-5">
                    <div class="row mt-2">
                        <div class="col-md-12 text-center">
                            <h4 class="labels mb-2">Sasaran</h4>
                            <p align="justify" class="text text-dark">{{ $visimisi->sasaran1 }}</p>
                            <p align="justify" class="text text-dark">{{ $visimisi->sasaran2 }}</p>
                            <p align="justify" class="text text-dark">{{ $visimisi->sasaran3 }}</p>
                            <p align="justify" class="text text-dark">{{ $visimisi->sasaran4 }}</p>
                            <p align="justify" class="text text-dark">{{ $visimisi->sasaran5 }}</p>
                            <p align="justify" class="text text-dark">{{ $visimisi->sasaran6 }}</p>
                            <p align="justify" class="text text-dark">{{ $visimisi->sasaran7 }}</p>
                            <p align="justify" class="text text-dark">{{ $visimisi->sasaran8 }}</p>
                            <p align="justify" class="text text-dark">{{ $visimisi->sasaran9 }}</p>
                            <p align="justify" class="text text-dark">{{ $visimisi->sasaran10 }}</p>
                            <p align="justify" class="text text-dark">{{ $visimisi->sasaran11 }}</p>
                            <p align="justify" class="text text-dark">{{ $visimisi->sasaran12 }}</p>
                            <p align="justify" class="text text-dark">{{ $visimisi->sasaran13 }}</p>
                        </div>
                    </div>
                </div>
            </div>
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