<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>{{ $page }} | Fakultas Teknik - UNIMAL</title>
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
  <link href="css/visimisi.css" rel="stylesheet">

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

      @include('appnav')

    </div>
  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center justify-content-center">
    <div class="container position-relative">
      <h1>Visi Misi</h1>
      <h2>Fakultas Teknik Universitas Malikussaleh</h2>
      <a href="" class="btn-get-started mt-4"><i class="fa fa-circle-play" aria-hidden="true"></i>  Mulai VR Tour</a>
      {{-- <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="btn-watch-started"><i class="bi bi-play-circle"></i><span>Watch Video</span></a> --}}
    </div>
  </section><!-- End Hero -->

  <main id="main">

    <!-- ======= Team Section ======= -->
    <section id="team" class="team section-bg">
        <div class="container" data-aos="fade-up">
  
          <div class="section-title text-primary">
            <h2>Rencananya Visi Misi</h2>
            {{-- <h5 class="text-start text-dark">Pada tahun 1982 didirikan Sekolah Tinggi Teknik Malikussaleh yang berada dibawah koordinasi Yayasan Pendidikan Malikussaleh, dimana Jurusan yang pertama sekali didirikan adalah Jurusan Teknik Sipil & Teknik Mesin, dan kemudian pada tahun 1983 dibuka Jurusan Teknik & Manajemen Industri.</h5> --}}
          </div>
  
        </div>
      </section><!-- End Team Section -->
    </main><!-- End #main -->
  
    @include('appfooter')
  
    <div id="preloader"></div>
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
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