@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/components/datatables.net-bs/css/dataTables.bootstrap.min.css') }}">
@endpush

<section class="content">
  <div class="row">
      <div class="box-footer md-3 mb-3">
          <a href="{{ route('dosen.create') }}" class="btn btn-primary"><i data-feather="plus"></i> CREATE NEW</a>
      </div>
  </div>

  <div class="container-fluid text-center">
    {{-- <h3>Ayo Mulai Berkontribusi</h3><br> --}}
    @foreach ($dosen as $row)
    <div class="row">
      <div class="kontribusi col-sm-2 col-sm-offset-1">
        <div class="card" style="width: 18rem;">
          <img src="{{ asset ('img/profil' .$row->profile_img) }}" class="card-img-top" alt="profile">
          <div class="card-body">
            <h5 class="card-title">{{ $row->name }}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    @endforeach
  </div>
</section>

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
