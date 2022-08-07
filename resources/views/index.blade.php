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
          <li><a class="nav-link scrollto active" href="#hero">Beranda</a></li>
          <li class="dropdown"><a href="#"><span>Profil</span> <i class="fa fa-angle-down" aria-hidden="true"></i></a>
            <ul>
              <li><a href="{{ route('sejarah') }}">Sejarah</a></li>
              <li><a href="#">Visi Misi</a></li>
              <li><a href="#">Struktur Organisasi</a></li>
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
                  <li><a href="#">Prodi Teknik Sipil</a></li>
                  <li><a href="#">Prodi Teknik Arsitektur</a></li>
                  <li><a href="#">Prodi Magister Teknik Sipil</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Jurusan Teknik Mesin</span><i class="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul>
                  <li><a href="#">Prodi Teknik Mesin</a></li>
                  <li><a href="#">Prodi Magister Teknik Energi Tebarukan</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Jurusan Teknik Industri</span><i class="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul>
                  <li><a href="#">Prodi Teknik Industri</a></li>
                  <li><a href="#">Prodi Teknik Logistik</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Jurusan Teknik Kimia</span><i class="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul>
                  <li><a href="#">Prodi Teknik Kimia</a></li>
                  <li><a href="#">Prodi Teknik Material</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Jurusan Teknik Elektro</span><i class="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul>
                  <li><a href="#">Prodi Teknik Elektro</a></li>
                  <li><a href="#">Prodi Sistem Informasi</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Jurusan Teknik Informatika</span><i class="fa fa-angle-down" aria-hidden="true"></i></a>
                <ul>
                  <li><a href="#">Prodi Teknik Informatika</a></li>
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
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center justify-content-center">
    <div class="container position-relative">
      <h1>Selamat Datang</h1>
      <h2>Fakultas Teknik Universitas Malikussaleh</h2>
      <a href="" class="btn-get-started mt-4"><i class="fa fa-circle-play" aria-hidden="true"></i>  Mulai VR Tour</a>
      {{-- <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="btn-watch-started"><i class="bi bi-play-circle"></i><span>Watch Video</span></a> --}}
    </div>
  </section><!-- End Hero -->

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
    </section><!-- End Clients Section -->

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
                                  <a itemprop="url" href="https://teknik.unimal.ac.id/index/single/199/seminar-nasional-fakultas-teknik-unimal-menjadi-ajang-paling-bergengsi">
                                      <img itemprop="image" src="{{ asset('img/news/'.$row->image) }}" alt="blog-post" style="width: 100%; height: 230px">
                                  </a>
                              </div>
                              <div class="ct-article-title">
                                  <a itemprop="url" href="https://teknik.unimal.ac.id/index/single/199/seminar-nasional-fakultas-teknik-unimal-menjadi-ajang-paling-bergengsi">
                                      <h4 class="text-dark">{{ $row->title }}</h4>
                                  </a>
                              </div>
                              <ul class="list-unstyled list-inline ct-article-meta">
                                <li class="text-muted text-dark">{{ $row->created_at->format('l, H:i:s d M Y') }}</li>
                              </ul>
                              <div itemprop="text" class="ct-article-description">
                                  <h6 class="ct-u-marginBottom50 text-dark">{{ Str::limit(strip_tags($row->details),50) }}</h6>
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
          </div>
          <!-- /row -->
                                

        {{-- @endforeach --}}

      </div>
    </section><!-- End Berita -->

    <!-- ======= Section ======= -->
    <section id="cta" class="cta">
    </section><!-- End Section -->

    <!-- ======= Testimonials Section ======= -->
    <section id="testimonials" class="testimonials">
      <div class="container">

        <div class="section-title text-primary">
          <h2>Rencananya Kata Sambutan Dekan</h2>
        </div>

        <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="">
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="">
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="">
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div><!-- End testimonial item -->

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section><!-- End Testimonials Section -->

    <!-- ======= Team Section ======= -->
    <section id="team" class="team section-bg">
        <div class="container" data-aos="fade-up">
  
          <div class="section-title text-primary">
            <h2>Rencananya Struktur Organisasi</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
  
          <div class="row">
  
            <div class="col-lg-6">
              <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                <div class="pic"><img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""></div>
                <div class="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                  <div class="social">
                    <a href=""><i class="ri-twitter-fill"></i></a>
                    <a href=""><i class="ri-facebook-fill"></i></a>
                    <a href=""><i class="ri-instagram-fill"></i></a>
                    <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="col-lg-6 mt-4 mt-lg-0">
              <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
                <div class="pic"><img src="assets/img/team/team-2.jpg" class="img-fluid" alt=""></div>
                <div class="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                  <div class="social">
                    <a href=""><i class="ri-twitter-fill"></i></a>
                    <a href=""><i class="ri-facebook-fill"></i></a>
                    <a href=""><i class="ri-instagram-fill"></i></a>
                    <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="col-lg-6 mt-4">
              <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
                <div class="pic"><img src="assets/img/team/team-3.jpg" class="img-fluid" alt=""></div>
                <div class="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                  <div class="social">
                    <a href=""><i class="ri-twitter-fill"></i></a>
                    <a href=""><i class="ri-facebook-fill"></i></a>
                    <a href=""><i class="ri-instagram-fill"></i></a>
                    <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="col-lg-6 mt-4">
              <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
                <div class="pic"><img src="assets/img/team/team-4.jpg" class="img-fluid" alt=""></div>
                <div class="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                  <div class="social">
                    <a href=""><i class="ri-twitter-fill"></i></a>
                    <a href=""><i class="ri-facebook-fill"></i></a>
                    <a href=""><i class="ri-instagram-fill"></i></a>
                    <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
  
        </div>
      </section><!-- End Team Section -->
    </main><!-- End #main -->
  
    <!-- ======= Footer ======= -->
    <footer id="footer">
  
      <div class="footer-newsletter">
      </div>
  
      <div class="footer-top">
        <div class="container">
          <div class="row">
  
            <div class="col-lg-3 col-md-6 footer-contact">
              <h3>Fakultas Teknik UNIMAL</h3>
              <p>
                Fakultas Teknik, Universitas Malikussaleh<br>
                Kampus Bukit Indah, Jalan Batam<br>
                Blang Pulo Muara Satu, Lhokseumawe, Provinsi Aceh, Indonesia<br>
                Email : ft@unimal.ac.id <br><br>
              </p>
            </div>
  
            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>
  
            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
              </ul>
            </div>
  
            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#" class="facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#" class="instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#" class="google-plus"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                <a href="#" class="linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
              </div>
            </div>
  
          </div>
        </div>
      </div>
  
      <div class="container footer-bottom clearfix">
        <div class="copyright">
          &copy; Copyright <strong><span>Fakultas Teknik Universitas Malikussaleh</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ -->
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer><!-- End Footer -->
  
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