<div class="position-sticky pt-md-0">
    <ul class="nav flex-column">
        <li class="nav-item">
            <a class="nav-link " href="{{ route('admin') }}">
                <i class="fa fa-laptop" aria-hidden="true"></i>
                <span class="ml-2">Dashboard</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="{{ route('berita.index') }}">
                <i class="fa fa-newspaper-o" aria-hidden="true"></i>
                <span class="ml-2">Berita</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('prodi.index') }}">
                <i class="fa fa-file" aria-hidden="true"></i>
                <span class="ml-2">Prodi</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('showdosen') }}">
                <i class="fa fa-user" aria-hidden="true"></i>
                <span class="ml-2">Dosen</span>
            </a>
        </li>
        <div class="btn-group">
            <a class="nav-link" href="#">
                <i class="fa fa-history" aria-hidden="true"></i>
                <span class="ml-2">Visi Misi</span>
            </a>
            <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </button>
            <div class="dropdown-menu">
                <li><a class="dropdown-item" href="{{ route('visimisifakultas') }}">Visi Misi Fakultas</a></li>
                <div class="dropdown-divider"></div>
                <li><a class="dropdown-item" href="{{ route('visimisiprodi.index') }}">Visi Misi Prodi</a></li>
            </div>
        </div>
        <div class="btn-group">
            <a class="nav-link" href="#">
                <i class="fa fa-university" aria-hidden="true"></i>
                <span class="ml-2">Sejarah</span>
            </a>
            <button type="button" class="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </button>
            <div class="dropdown-menu">
                <li><a class="dropdown-item" href="{{ route('sejarahfakultas') }}">Sejarah Fakultas</a></li>
                <div class="dropdown-divider"></div>
                <li><a class="dropdown-item" href="{{ route('sejarahprodi.index') }}">Sejarah Prodi</a></li>
            </div>
        </div>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('prestasiprodi.index') }}">
                <i class="fa fa-star" aria-hidden="true"></i>
                <span class="ml-2">Prestasi</span>
            </a>
        </li>
    </ul>
</div>
