@extends('admin.app')

@section('body')

    <hr>

@push('styles')
    <link rel="stylesheet" href="{{ asset('backend/components/datatables.net-bs/css/dataTables.bootstrap.min.css') }}">
@endpush

<section class="content">
<div class="container-fluid text-center">
  <div class="row justify-content-flex-start">
    {{-- <a href="{{ route('dosen.create') }}" class="btn btn-primary mb-3" style="width: 9%"><i data-feather="plus"></i>NEW</a>
    <form action="/showdosen">
      <div class="col" style="width: 20%">
      <select class="form-select" name="prodi_id" id="prodi_id">
        @foreach ($id_prodi as $row)
          <option value="{{ $row->name }}">{{ $row->name }}</option>
        @endforeach
      </select>
      </div>
      <button class="btn btn-primary" style="widht: 200%" type="submit">Search</button>
    </form> --}}

    <a href="{{ route('dosen.create') }}" class="btn btn-primary mb-3" style="width: 9%"><i data-feather="plus"></i>NEW</a>
    <form action="/showdosen">
      <div class="col" style="width: 20%">
      <select class="form-select" name="prodi_id" id="prodi_id">
        @foreach ($id_prodi as $row)
          <option value="{{ $row->name }}">{{ $row->name }}</option>
        @endforeach
      </select>
      </div>
      <button id="buttonid">GO</button>

    <script>
      document.getElementById("buttonid").onclick = function () {
          var select = document.getElementById("selectid");
          var option = select.children[select.selectedIndex];
      
          if (!option || !option.getAttribute("j-link") || !option.getAttribute("j-link").length)
              return;

          window.location = option.getAttribute("j-link");
      };
    </script>
    
  </div>

  
    </form>

  
  <div class="row">
    <!-- Dosen -->
    @php
      $i = 1;
    @endphp
    @foreach ($dosen as $row)
              <div class="col-md-2">
                <div class="card bg-light" style="width: 100%;">
                  <img class="card-img-top" src="{{ asset('img/profil/'.$row->profile_img) }}" alt="{{ $row->name }}">
                  <div class="card-body">
                    <h6 align='left' class="card-title">{{ $row->name }}</h6>
                    <p align='left' class="card-text">NIP/NIDN :</p>
                    <p align='left' class="card-text">{{ $row->nip }} / {{ $row->nidn }}</p>
                    <p align='left' class="card-text">Prodi / {{ $row->prodi->name }}</p>
                  </div>
                </div>
              </div>
    @if ($i % 6 == 0)
      <div class="clearfix visible-md visible-lg"></div>
    @endif
    @php
      $i++;
    @endphp
    @endforeach
    <!-- Dosen -->
  </div>
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
