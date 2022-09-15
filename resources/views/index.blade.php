<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Fakultas Teknik - UNIMAL</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="favicon/android-192x192.png">
    <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png">
    <link rel="manifest" href="favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
    <link rel="manifest" href="favicon/site.webmanifest">

    <script src="https://kit.fontawesome.com/35770c1bfd.js" crossorigin="anonymous"></script>
  
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/bootstrap-icons.css" rel="stylesheet">
  <link href="css/boxicons.min.css" rel="stylesheet">
  <link href="css/glightbox.min.css" rel="stylesheet">
  <link href="css/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="css/style.css" rel="stylesheet">

  <style>
  #hero {
    width: 100%;
    height: 80vh;
    background-image: url("/hero-img.jpg");
    background-size: cover;
    position: relative;
  }
  
  #hero:before {
    content: "";
    background: rgba(45, 53, 69, 0.7);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }
  
  #hero .container {
    text-align: center;
    padding-top: 50px;
  }
  
  @media (max-width: 992px) {
    #hero .container {
      padding-top: 0;
    }
  }
  
  #hero h1 {
    margin: 0;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    color: #fff;
  }
  
  #hero h2 {
    color: #eee;
    margin: 15px 0 0 0;
    font-size: 22px;
  }
  
  #hero .btn-get-started {
    font-family: "Jost", sans-serif;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 10px 28px 11px 28px;
    border-radius: 50px;
    transition: 0.5s;
    margin: 10px 0 0 0;
    color: #fff;
    background: #47b2e4;
  }
  #hero .btn-get-started:hover {
    background: #209dd8;
  }
  #hero .btn-watch-video {
    font-size: 16px;
    display: flex;
    align-items: center;
    transition: 0.5s;
    margin: 10px 0 0 25px;
    color: #fff;
    line-height: 1;
  }
  #hero .btn-watch-video i {
    line-height: 0;
    color: #fff;
    font-size: 32px;
    transition: 0.3s;
    margin-right: 8px;
  }
  #hero .btn-watch-video:hover i {
    color: #47b2e4;
  }
  
  @media (min-width: 1024px) {
    #hero {
      background-attachment: fixed;
    }
  }
  
  @media (max-width: 768px) {
    #hero {
      height: 100vh;
    }
  
    #hero h1 {
      font-size: 28px;
      line-height: 36px;
    }
  
    #hero h2 {
      font-size: 18px;
      line-height: 24px;
    }
  }
</style>
</head>

<body>

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top header">
    <div class="container d-flex align-items-center justify-content-between">

      <a href="https://teknik.unimal.ac.id/"><img class="logo col-md-10 col-xs-6" src="https://teknik.unimal.ac.id/vic_image/system/logo_unimal_2.png"></a>
      <div class="header-tengah col-md-3 col-sm-6 col-xs-10">
        <span> <b class="judul-web text-white">Fakultas Teknik</span>
        <br>
        <span class="deskripsi-web text-white">Universitas Malikussaleh</span>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link" href="{{ route('welcome') }}">Beranda</a></li>
          <li class="dropdown"><a href="#"><span>Profil</span> <i class="fa fa-angle-down" aria-hidden="true"></i></a>
            <ul>
              <li><a href="{{ route('sejarah') }}">Sejarah</a></li>
              <li><a href="{{ route('visimisi') }}">Visi Misi</a></li>
              <li><a href="#team">Struktur Organisasi</a></li>
              <li><a href="#">Profil Pimpinan Fakultas</a></li>
              <li><a href="#">Fasilitas Penunjang</a></li>
              <li><a href="#">Prestasi</a></li>
              <li><a href="#">Dosen</a></li>
              <li><a href="#">Tenaga Kependidikan</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>Jurusan</span> <i class="fa fa-angle-down" aria-hidden="true"></i></a>
            <ul>
              <li class="dropdown"><a href="#"><span>Jurusan Teknik Sipil</span><i class="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul>
                  <li><a href="https://sipil.unimal.ac.id/">Prodi Teknik Sipil</a></li>
                  <li><a href="https://arsitektur.unimal.ac.id/">Prodi Teknik Arsitektur</a></li>
                  <li><a href="#">Prodi Magister Teknik Sipil</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Jurusan Teknik Mesin</span><i class="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul>
                  <li><a href="http://tm.unimal.ac.id/">Prodi Teknik Mesin</a></li>
                  <li><a href="https://mtet.unimal.ac.id/">Prodi Magister Teknik Energi Tebarukan</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Jurusan Teknik Industri</span><i class="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul>
                  <li><a href="http://industri.unimal.ac.id/">Prodi Teknik Industri</a></li>
                  <li><a href="#">Prodi Teknik Logistik</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Jurusan Teknik Kimia</span><i class="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul>
                  <li><a href="https://teknik-kimia.unimal.ac.id/">Prodi Teknik Kimia</a></li>
                  <li><a href="https://material.unimal.ac.id/">Prodi Teknik Material</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Jurusan Teknik Elektro</span><i class="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul>
                  <li><a href="https://elektro.unimal.ac.id/">Prodi Teknik Elektro</a></li>
                  <li><a href="https://sisteminformasi.unimal.ac.id/">Prodi Sistem Informasi</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Jurusan Teknik Informatika</span><i class="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul>
                  <li><a href="https://informatika.unimal.ac.id/">Prodi Teknik Informatika</a></li>
                  <li><a href="#">Prodi Magister Teknologi Informasi</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>Akademik</span> <i class="fa fa-angle-down" aria-hidden="true"></i></a>
            <ul>
              <li><a href="#">Informasi Akademik</a></li>
              <li class="dropdown"><a href="#"><span>Penelitian & Pengabdian</span><i class="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul>
                  <li><a href="#">LPPM</a></li>
                  <li><a href="#">Penelitian</a></li>
                  <li><a href="#">Pengabdian</a></li>
                  <li><a href="#">HaKI</a></li>
                </ul>
              </li>
              <li><a href="#">Daftar Yudisium</a></li>
              <li><a href="#">Kebijakan Akademik</a></li>
              <li><a href="#">Panduan Akademik</a></li>
              <li><a href="#">Akreditasi</a></li>
              <li><a href="#">Informasi Umum</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>Layanan</span> <i class="fa fa-angle-down" aria-hidden="true"></i></a>
            <ul>
              <li><a href="#">SIA</a></li>
              <li><a href="#">E-Learning</a></li>
              <li><a href="#">E-Library</a></li>
              <li><a href="#">SIMPEG</a></li>
              <li><a href="#">PORTAL</a></li>
              <li><a href="#">Survey UNIMAL</a></li>
              <li><a href="#">Layanan Kemahasiswaan</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>Kemahasiswaan</span> <i class="fa fa-angle-down" aria-hidden="true"></i></a>
            <ul>
              <li><a href="#">Kampus Merdeka</a></li>
              <li class="dropdown"><a href="#"><span>Organisasi Mahasiswa</span><i class="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul>
                  <li><a href="#">BEM FT UNIMAL</a></li>
                  <li><a href="#">DPM FT UNIMAL</a></li>
                  <li><a href="#">HIMATESIP</a></li>
                  <li><a href="#">HIMATESIN</a></li>
                  <li><a href="#">HIMTI</a></li>
                  <li><a href="#">HIMATEMIA</a></li>
                  <li><a href="#">HIMATRO</a></li>
                  <li><a href="#">HIMATEKA</a></li>
                  <li><a href="#">HIMATIF</a></li>
                  <li><a href="#">HIMASI</a></li>
                  <li><a href="#">HIMATERIAL</a></li>
                  <li><a href="#">Teknik Logistik</a></li>
                </ul>
              </li>
              <li><a href="#">Alumni</a></li>
              <li><a href="#">Data Mahasiswa</a></li>
              <li><a href="#">Prestasi Mahasiswa</a></li>
              <li><a href="#">Kegiatan Mahasiswa</a></li>
            </ul>
          </li>
        </ul>
        <i class="fa fa-bars mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->

    </div>
  </header>
  <!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center justify-content-center">
    <div class="container position-relative">
      <h1>Selamat Datang</h1>
      <h2>Fakultas Teknik Universitas Malikussaleh</h2>
      <a href="" class="btn-get-started mt-4"><i class="fa fa-circle-play" aria-hidden="true"></i>  Mulai VR Tour</a>
      {{-- <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="btn-watch-started"><i class="bi bi-play-circle"></i><span>Watch Video</span></a> --}}
    </div>
  </section>
  <!-- End Hero -->

  <main id="main">

    <!-- ======= Clients Section ======= -->
    <section id="clients" class="clients section-bg">
      <div class="container">
        <div class="section-title text-primary">
          <h2>Kerja Sama</h2>
        </div>

        <div class="row">

          {{-- <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"> --}}
          <div class="col-md-3 col-xs-2 align-items-center justify-content-center">
              <a target="_blank" href="http://acehprov.go.id/">
                  <img src="https://teknik.unimal.ac.id/assets/logo/lg_ks_1.png">
              </a>
          </div>

          <div class="col-md-3 col-xs-2 align-items-center justify-content-center">
              <a target="_blank" href="http://www.undip.ac.id/">
                  <img src="https://teknik.unimal.ac.id/assets/logo/lg_ks_2.png">
              </a>
          </div>

          <div class="col-md-3 col-xs-2 align-items-center justify-content-center">
            <a target="_blank" href="http://unsyiah.ac.id/">
                  <img src="https://teknik.unimal.ac.id/assets/logo/lg_ks_3.png">
            </a>
          </div>

          <div class="col-md-3 col-xs-2 align-items-center justify-content-center">
            <a target="_blank" href="http://www.usu.ac.id/">
                <img src="https://teknik.unimal.ac.id/assets/logo/lg_ks_4.png">
            </a>
          </div>

          <div class="col-md-3 col-xs-2 align-items-center justify-content-center">
            <a target="_blank" href="http://www.ukm.my/">
                <img src="https://teknik.unimal.ac.id/assets/logo/lg_ks_5.png">
            </a>
          </div>

          <div class="col-md-3 col-xs-2 align-items-center justify-content-center">
            <a target="_blank" href="http://www.pertamina.com/news-room/seputar-energi/peralihan-operasi-pt-arun-ngl-menjadi-pt-perta-arun-gas-(1)/">
                <img src="https://teknik.unimal.ac.id/assets/logo/lg_ks_6.png">
            </a>
          </div>

          <div class="col-md-3 col-xs-2 align-items-center justify-content-center">
            <a target="_blank" href="http://pupuk-indonesia.com/">
                <img src="https://teknik.unimal.ac.id/assets/logo/lg_ks_7.png">
            </a>
          </div>
        
          <div class="col-md-3 col-xs-2 align-items-center justify-content-center">
            <a target="_blank" href="http://www.perpusnas.go.id/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/LOGO-PERPUSNAS.svg/800px-LOGO-PERPUSNAS.svg.png">
            </a>
          </div>

        </div>

      </div>
    </section>
    <!-- End Clients Section -->

    <!-- ======= Berita ======= -->
    <section id="services" class="services">
      <div class="container">

        <div class="section-title text-primary">
          <h2>Berita</h2>
        </div>

          <div class="row">
            <!-- berita -->
            @php
              $i = 1;
            @endphp
            @foreach ($berita as $row)
                      <div class="col-md-4">
                          <article itemprop="blogPost" itemscope="" itemtype="#" class="ct-article ct-iconBox--withImageGreyScale">
                              <div class="ct-article-media ct-icon">
                                  <a itemprop="url" href="{{ route('show') }}">
                                      <img itemprop="image" src="{{ asset('img/news/'.$row->image) }}" alt="blog-post" style="width: 100%; height: 230px">
                                  </a>
                              </div>
                              <div class="ct-article-title">
                                  <a itemprop="url" href="{{ route('show') }}">
                                      <h4 class="text-dark">{{ $row->title }}</h4>
                                  </a>
                              </div>
                              <ul class="list-unstyled list-inline ct-article-meta">
                                <li class="text-muted text-dark">{{ $row->created_at->format('l, H:i:s d M Y') }}</li>
                              </ul>
                              <div itemprop="text" class="ct-article-description">
                                  <h6 class="ct-u-marginBottom50 text-dark">{{ Str::limit(strip_tags($row->details1),50) }}</h6>
                              </div>
                          </article>
                      </div>
            @if ($i % 3 == 0)
              <div class="clearfix visible-md visible-lg"></div>
            @endif
            @php
              $i++;
            @endphp
            @endforeach
            <!-- berita -->
          </div>

      </div>
    </section>
    <!-- End Berita -->

    <!-- ======= Section ======= -->
    <section id="cta" class="cta">
    </section>
    <!-- End Section -->

    <!-- ======= Section Kata Sambutan======= -->
    <section id="testimonials" class="testimonials">
      <div class="container">

        <div class="section-title text-primary">
          <h2>Rencananya Kata Sambutan Dekan</h2>
        </div>

        <div class="card mb-3" style="max-width: 100%;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="/dekan.jpeg" style="width: 100%; height: 100%" class="img-cover" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h1 class="card-title text-dark">Card title</h1>
                <h5 class="card-text text-dark">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h5>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <!-- End Section Kata SambutanS -->

    <!-- ======= Struktur Section ======= -->
    <section id="team" class="team section-bg">
        <div class="container" data-aos="fade-up">
  
          <div class="section-title text-primary">
            <h2>Struktur Organisasi</h2>
          </div>
  
          <div class="row">
          <div class="container">
            <img class="img-cover" style="width: 100%; height: 100%" src="struktur-organisasi.jpg">
          </div>
          
          </div>
  
        </div>
      </section>
      <!-- End Struktur Section -->
    </main>
    <!-- End #main -->
  
    @include('appfooter')
  
    <div id="preloader"></div>
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="fa fa-angle-up"></i></a>
  <!-- Vendor JS Files -->
  <script src="js/purecounter_vanilla.js"></script>
  <script src="js/bootstrap.bundle.min.js"></script>
  <script src="js/glightbox.min.js"></script>
  <script src="js/isotope.pkgd.min.js"></script>
  <script src="js/swiper-bundle.min.js"></script>
  <script src="js/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="js/main.js"></script>

</body>

</html>