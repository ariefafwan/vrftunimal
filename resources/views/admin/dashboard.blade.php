@extends('admin.app')

@section('body')

    <hr>

    <div class="row my-4">
        <div class="col-xl-2 col-md-4 mb-4">
            <a href="{{ route('berita.index') }}">
                <div class="card border-left shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Berita</div>
                            </div>
                            <div class="col-auto">
                                <i class="fa fa-newspaper-o" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-xl-2 col-md-4 mb-4">
            <a href="{{ route('showdosen') }}">
                <div class="card border-left shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                    Dosen</div>
                            </div>
                            <div class="col-auto">
                                <i class="fa fa-user" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-xl-2 col-md-4 mb-4">
            <a href="{{ route('visimisiprodi.index') }}"> 
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Visi Misi</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
                        </div>
                        <div class="col-auto">
                            <i class="fa fa-history" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </a>
        </div>
        <div class="col-xl-2 col-md-4 mb-4">
            <a href="{{ route('visimisiprodi.index') }}"> 
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-dark text-uppercase mb-1">
                                Sejarah</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
                        </div>
                        <div class="col-auto">
                            <i class="fa fa-university" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </a>
        </div>
        <div class="col-xl-2 col-md-4 mb-4">
            <a href="{{ route('visimisiprodi.index') }}"> 
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                Prestasi</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
                        </div>
                        <div class="col-auto">
                            <i class="fa fa-star" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </a>
        </div>
    </div>


@endsection
