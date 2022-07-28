@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/components/datatables.net-bs/css/dataTables.bootstrap.min.css') }}">
@endpush

<div class="container-fluid text-center">
    <h3>Ayo Mulai Berkontribusi</h3><br>
    <div class="row">
      <div class="kontribusi col-sm-2 col-sm-offset-1">
        <div class="card card-block text-xs-center">
          <h4 class="card-title"><a href="#" class="btn btn-danger btn-block">Beri Donasi</a></h4>
          <p class="card-text">Untuk masalah kesehatan perorangan & masyarakat</p>
        </div>
      </div>
    </div>
</div>

@endsection

@push('scripts')
    <script src="{{ asset('backend/components/datatables.net/js/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('backend/components/datatables.net-bs/js/dataTables.bootstrap.min.js') }}"></script>
    <script>
        $(function(){
            $('#category-table').DataTable();
        })
    </script>
@endpush
