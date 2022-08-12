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
  <link href="css/style.css" rel="stylesheet">

  <style>
    #hero {
      width: 100%;
      height: 80vh;
      background-image: url("/sejarah.jpg");
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

      @include('appnav')

    </div>
  </header>
  <!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center justify-content-center">
    <div class="container position-relative">
      <h1>Sejarah</h1>
      <h2>Fakultas Teknik Universitas Malikussaleh</h2>
      <a href="" class="btn-get-started mt-4"><i class="fa fa-circle-play" aria-hidden="true"></i>  Mulai VR Tour</a>
      {{-- <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="btn-watch-started"><i class="bi bi-play-circle"></i><span>Watch Video</span></a> --}}
    </div>
  </section>
  <!-- End Hero -->

  <main id="main">

    <!-- ======= Team Section ======= -->
    <section id="team" class="team section-bg">
        <div class="container" data-aos="fade-up">
  
          <div class="section-title text-primary">
            <h2>Sejarah</h2>
            <h5 class="text-start text-dark">Pada tahun 1982 didirikan Sekolah Tinggi Teknik Malikussaleh yang berada dibawah koordinasi Yayasan Pendidikan Malikussaleh, dimana Jurusan yang pertama sekali didirikan adalah Jurusan Teknik Sipil & Teknik Mesin, dan kemudian pada tahun 1983 dibuka Jurusan Teknik & Manajemen Industri.</h5>
            <br>
            <h5 class="text-start text-dark">Untuk meningkatkan status maka pada tanggal 19 Maret 1984 secara resmi Sekolah Tinggi Teknik Malikussaleh berstatus Terdaftar dengan Surat Keputusan Menteri Pendidikan dan Kebudayaan RI dengan nomor 0357/0/1984.  Pada tahun 1996  Sekolah Tinggi Teknik Malikussaleh Membuka satu jurusan baru yaitu Jurusan Teknik Kimia.</h5>
            <br>
            <h5 class="text-start text-dark">Upaya peningkatan ruang lingkup kerja tidak hanya sampai disitu, karena pada tanggal 11 September 1989 secara resmi Sekolah Tinggi Teknik Malikussaleh terdaftar sebagai FT UNIMAL dengan Surat Keputusan Menteri Pendidikan dan Kebudayaan RI No. 0584/0/1989 dengan jurusannya Teknik Sipil, Teknik Mesin, Teknik & Manajemen Industri dan Teknik Kimia.</h5>
            <br>
            <h5 class="text-start text-dark">Dengan melihat perkembangan dan tingkat kebutuhan  pendidikan Teknik dikawasan Industri Lhokseumawe di tahun 1989 Sekolah Tinggi Teknik Malikussaleh kembali membuka Jurusan Teknik Elektro.</h5>
            <h5 class="text-start text-dark">Perkembangan ini telah membawa FT UNIMAL memiliki lima Jurusan  yaitu :</h5>
            <h5 class="text-start text-dark">1. Jurusan Teknik Sipil. </h5>
            <h5 class="text-start text-dark">2. Jurusan Teknik Mesin. </h5>
            <h5 class="text-start text-dark">3. Jurusan Teknik Industri. </h5>
            <h5 class="text-start text-dark">4. Jurusan Teknik Kimia. </h5>
            <h5 class="text-start text-dark">5. Jurusan Teknik Elektro. </h5>
            <br>
            <h5 class="text-start text-dark"> Pengelolaan Fakultas Teknik sejak tahun 1987 sampai tahun 1996 dipercayakan oleh Yayasan Pendidikan Malikussaleh kepada PERSATUAN INSINYUR INDONESIA (PII) Cabang Lhokseumawe, selanjutnya setelah itu kembali lagi ke Yayasan.</h5>
            <br>
            <h5 class="text-start text-dark">Dengan penegerian UNIMAL pada tanggal 01 Agustus 2001 Oleh presiden Megawati Soekarno Putri berdasarkan Keppres N0. 95 Tahun 2001, FT UNIMAL terus berusaha untuk memenuhi kebutuhan perkembangan Teknologi maka di tahun ajaran 2003-2004 membuka lagi dua prodi baru yaitu Program Studi Informatika yang berada dibawah Jurusan Teknik elektro dan Program Studi Teknik Arsitektur dibawah Jurusan Teknik sipil. Kemudian pada tahun 2014 membuka prodi baru yaitu Program Studi Sistem Informasi.</h5>
          </div>
  
        </div>
      </section>
      <!-- End Team Section -->
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