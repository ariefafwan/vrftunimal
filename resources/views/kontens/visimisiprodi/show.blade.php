<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title> {{ $page }} | Fakultas Teknik - UNIMAL</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="57x57" href="{{ asset ('favicon/apple-icon-57x57.png') }}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{ asset ('favicon/apple-icon-60x60.png') }}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ asset ('favicon/apple-icon-72x72.png') }}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset ('favicon/apple-icon-76x76.png') }}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{ asset ('favicon/apple-icon-114x114.png') }}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ asset ('favicon/apple-icon-120x120.png') }}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ asset ('favicon/apple-icon-144x144.png') }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ asset ('favicon/apple-icon-152x152.png') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset ('favicon/apple-icon-180x180.png') }}">
    <link rel="icon" type="image/png" sizes="192x192"  href="{{ asset ("favicon/android-192x192.png") }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset ('favicon/favicon-96x96.png') }}">
    <link rel="manifest" href="favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="{{ asset ("favicon/ms-icon-144x144.png") }}">
    <meta name="theme-color" content="#ffffff">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset ('favicon/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset ('favicon/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset ('favicon/favicon-16x16.png') }}">
    <link rel="manifest" href="favicon/site.webmanifest">

    <script src="https://kit.fontawesome.com/35770c1bfd.js" crossorigin="anonymous"></script>
  
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,700;1,700" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="{{ asset ('css/bootstrap.min.css') }}" rel="stylesheet">
  <link href="{{ asset ("css/bootstrap-icons.css") }}" rel="stylesheet">
  <link href="{{ asset ('css/boxicons.min.css') }}" rel="stylesheet">
  <link href="{{ asset ('css/glightbox.min.css') }}" rel="stylesheet">
  <link href="{{ asset ('css/swiper-bundle.min.css') }}" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="{{ asset('css/style.css') }}" rel="stylesheet">
  <style type="style/css">

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
  <header id="header" class="header header-dark bg-dark fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <a href="{{ route('welcome') }}"><img class="logo col-md-10 col-xs-6" src="https://teknik.unimal.ac.id/vic_image/system/logo_unimal_2.png"></a>
        <div class="header-tengah col-md-3 col-sm-6 col-xs-10">
            <span> <b class="judul-web text-white">Fakultas Teknik</span>
            <br>
            <span class="deskripsi-web text-white">Universitas Malikussaleh</span>
          </div>
      @include('appnav')
    </div>
  </header><!-- End Header -->

  <main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs">
      <div class="container">
      </div>
      <div class="divider"></div>

    </div><!-- End Breadcrumbs -->

    <section class="sample-page">
      <div class="container" data-aos="fade-up">
        <div class="section-title text-dark">
          @foreach ($visimisi as $visimisi)
          <h2>Visi, Misi, Tujuan, & Sasaran PRODI {{ $visimisi->prodi->name }} UNIMAL</h2>
        <div class="row">
          <div class="col-md-12 text-center mb-3">
            <h3 class="labels mb-2">VISI</h3>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->visi }}</p>
          </div>
          <div class="col-md-12 text-center mb-3">
            <h3 class="labels mb-2">MISI</h3>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->misi1 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->misi2 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->misi3 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->misi4 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->misi5 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->misi6 }}</p>
          </div>
          <div class="col-md-12 text-center mb-3">
            <h3 class="labels mb-2">TUJUAN</h3>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->tujuan1 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->tujuan2 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->tujuan3 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->tujuan4 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->tujuan5 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->tujuan6 }}</p>
          </div>
          <div class="col-md-12 text-center mb-3">
            <h3 class="labels mb-2">SASARAN</h3>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->sasaran1 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->sasaran2 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->sasaran3 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->sasaran4 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->sasaran5 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->sasaran6 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->sasaran7 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->sasaran8 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->sasaran9 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->sasaran10 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->sasaran11 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->sasaran12 }}</p>
            <p align="justify" style="font-size: 18px;" class="text text-dark">{{ $visimisi->sasaran13 }}</p>
          </div>
          @endforeach
        </div>
        </div>

      </div>
    </section>

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  @include('appfooter')
  <!-- End Footer -->

  <div id="preloader"></div>
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="fa fa-angle-up"></i></a>

  <!-- Vendor JS Files -->
  <script src="{{ asset ('js/purecounter_vanilla.js') }}"></script>
  <script src="{{ asset ('js/bootstrap.bundle.min.js') }}"></script>
  <script src="{{ asset ('js/glightbox.min.js') }}"></script>
  <script src="{{ asset ('js/isotope.pkgd.min.js') }}"></script>
  <script src="{{ asset ("js/swiper-bundle.min.js") }}"></script>
  <script src="{{ asset ('js/validate.js') }}"></script>

  <!-- Template Main JS File -->
  <script src="{{ asset ('js/main.js') }}"></script>

</body>

</html>