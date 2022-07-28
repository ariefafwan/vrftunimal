<div class="position-sticky pt-md-0">
    <ul class="nav flex-column">
        <li class="nav-item">
            <a class="nav-link " href="{{ route('admin') }}">
                <i data-feather="monitor"></i>
                <span class="ml-2">Dashboard</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="{{ route('berita.index') }}">
                <i data-feather="file"></i>
                <span class="ml-2">Berita</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('prodi.index') }}">
                <i data-feather="book"></i>
                <span class="ml-2">All Prodi</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('dosen.index') }}">
                <i data-feather="users"></i>
                <span class="ml-2">All Dosen</span>
            </a>
        </li>
        
    </ul>
</div>
