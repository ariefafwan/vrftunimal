@extends('admin.app')

@section('body')

    <hr>

    <div class="row my-4">
        <div class="col-xl-3 col-md-6 mb-4">
            {{-- <a href="{{ route('admin.create') }}">  --}}
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                All Users</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </a>
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
            {{-- <a href="{{ route('alamat-toko.index') }}"> --}}
                <div class="card border-left shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                    All Result</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-plus-square fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        {{-- <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                Total Transaksi
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">
                                @currency($transaksi)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> --}}
    </div>


@endsection
