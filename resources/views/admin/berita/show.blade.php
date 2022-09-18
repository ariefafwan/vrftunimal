<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title> | Fakultas Teknik - UNIMAL</title>
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
  <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <a href="https://teknik.unimal.ac.id/" class="logo d-flex align-items-center me-auto me-lg-0"><img class="logo d-flex align-items-center me-auto me-lg-0" src="https://teknik.unimal.ac.id/vic_image/system/logo_unimal_2.png"></a>
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
        <div class="content">
              <div class="col-md-13">
                <article class="single post col-md-18">
                  <h1 align="center" class="judul-posting text-dark">Seminar Nasional Fakultas Teknik Unimal Menjadi Ajang Paling Bergengsi</h1>
                  <div class="info">

                    <center><span class="date text-dark">
                    24 July 2022</span>
                    <span class="category text-dark">
                    <a href="https://teknik.unimal.ac.id/index/category/1/umum"></a>,
                    </span>

                  </div>
                    
                  <center><img class="img-cover" src="https://teknik.unimal.ac.id/vic_image/post/teknikunimal-1279585531-unimal-1608889754-SNFT_2022.jpg"></center>                        
      
                    <p class="text-dark"><br>
                      Lhokseumawe- Fakultas Teknik Universitas Malikussleh, melaksanakan Seminar Nasional Fakultas Teknik (SNFT) 2022, Kamis (21/7/2022). Ajang presentasi riset ilmiah tersebut menjadi salah satu kegiatan paling bergensi yang pernah diadakan di Unimal. Mengingat antusiasme peserta sangat besar dari Sabang sampai Maroeke. Ada 25 perguruan tinggi negeri dan swasta seluruh Indonesia mengirimkan papernya ke panitia dengan jumlah peserta mencapai 300 orang.&nbsp;</p>
                    <p class="text-dark"><br>
                      Rektor Unimal, Prof Herman Fithra, ASEAN Eng dalam arahannya menyampaikan rasa syukur atas terlaksananya SNFT 2022 tersebut. Dia juga mengapresiasi kerjakeras panitia yang mampu menghadirkan peserta dari barat sampai timur Indonesia. Apresiasi khusus juga disampaikan kepada universitas dan perguruan tinggi yang ada di Indonesia Timur, terutama yang ada di daerah papua, sudah berkenan berpartisipasi dalam kegiatan seminar yang dilaksanakan Fakultas Teknik Unimal. “Secara khusus, teman-teman Indonesia Timur dapat bergabung dengan Unimal.”ujarya. &nbsp;</p>
      
                    <p class="text-dark"><br>
                      Dekan Fakultas Teknik Unimal, Dr Muhammad, MSc mengharapkan kegiatan SNFT kali ini bukan hanya sekedar tempat berkumpul, tapi seminar nasional dapat dijadikan ajang untuk berbagi ilmu dan pengatahuan dengan berbagai latar belakang dan kemampuan yang dimiliki peserta. Seminar dapat menjadi ruang untuk menyambung ide untuk membangun dan mengembangkan pengetahuan di tengah revolusi industri 4.0. Di sisi lain, SNFT juga bisa menjadi ruang untuk menjalin silaturahmi dengan para peneliti dan dosen dari berbagai perguruan tinggi negeri dan swasta. “Juga dengan berbagai stakeholder yang selama ini sudah terjalin kerjasama yang baik,”harapnya. &nbsp; &nbsp; &nbsp;</p>
      
                    <p class="text-dark"><br>
                      Ketua pelaksana SNFT 2022, Munirul Ula PhD mengatakan, kegiatan seminar yang &nbsp;menghadirkan pemateri dari berbagai perguruan tinggi, instansi pemerintah, dan swasta tersebut mengundang antusiasme peserta di luar prediksi yang mencapai 300 peserta dan pemakalah. Tingginya minat peserta seminar juga terlihat dari banyaknya paper yang diterima oleh panitia pelaksana, mencapai 200 paper inovasi riset dari 25 universitas seluruh Indonesia. “Namun, kita hanya menerima 127 paper terbaik untuk diikutsertakan dalam seminar kali ini,”terangnya.&nbsp;</p>
      
                    <p class="text-dark"><br>
                      Sementara, Ketua Bidang Kesekretariatan, Prof Dahlan Abdullah ASEAN Eng menambahkan bahwa salah satu faktor penyebab tingginya minat peserta SNFT Unimal tahun ini, mungkin luasnya cakupkan bidang ilmu yang kita tawarkan untuk pengajuan paper. Yang lebih mengesankan, paper lokal Fakultas Teknik Unimal mencapai 92 paper. Artinya sudah ada keinginan insan akedimis, khususnya dosen di lingkungan fakultas teknik untuk melakukan perubahan signifikan mengikuti kemajuan pengetahuan dan perkembangan teknologi. “Kami berharap SNFT dapat menjadi agenda rutin FT, ke depan kita akan bergerak menuju conference international ICET,”tegasnya.&nbsp;</p>
      
                    <p class="text-dark"><br>
                      Seperti diberitakan sebelumnya, SNFT 2022 mengusung tema “Inovasi riset dan teknologi berbasis potensi lokal” dengan menghadirkan pemateri, &nbsp;antara lain Prof Achmad Benny Mutiara dari APTIKOM, Dr Jarot Rahardjo dari Badan Riset dan Inovasi Nasional (BRIN), Dr Muttaqin dosen Teknik Sipil Universitas Syiah Kuala, guru besar Teknik Mesin dan Industri UGM, Prof M Noer Ilman, guru besar Teknik Industri Unand, Prof Rika Ampuh Hadiguna, dan Dr Anggi Bayu Ariwibowo dari PT Hutama Karya</p>
                </article>
              </div>
                
                <div class="col-md-3">
                  <div class="sidebar col-md-12">
                      <div class="widget">
                        <h4>BERITA TERBARU</h4>
                        <ul><li><a href="https://teknik.unimal.ac.id/index/single/199/seminar-nasional-fakultas-teknik-unimal-menjadi-ajang-paling-bergengsi">Seminar Nasional Fakultas Teknik Unimal Menjadi Ajang Paling Bergengsi</a></li><li><a href="https://teknik.unimal.ac.id/index/single/198/mahasiswa-kembar-sempro-perdana-di-magister-teknologi-informasi">Mahasiswa Kembar Sempro Perdana di Magister Teknologi Informasi</a></li><li><a href="https://teknik.unimal.ac.id/index/single/197/surat-edaran-rektor-nomor-5-tahun-2021-tentang-pelaksanaan-kegiatan-akademik-semester-ganjil-20202021">Surat Edaran Rektor Nomor 5 Tahun 2021 Tentang Pelaksanaan Kegiatan Akademik Semester Ganjil 2020/2021</a></li></ul>    
                      </div>
                      <div class="widget">
                        <h4>KATEGORI</h4>
                        <ul><li><a href="https://teknik.unimal.ac.id/index/category/1/umum">Umum</a></li><li><a href="https://teknik.unimal.ac.id/index/category/2/pengumuman">Pengumuman</a></li><li><a href="https://teknik.unimal.ac.id/index/category/3/artikel">Artikel</a></li><li><a href="https://teknik.unimal.ac.id/index/category/4/kegiatan">Kegiatan</a></li><li><a href="https://teknik.unimal.ac.id/index/category/5/dunia-pendidikan">Dunia Pendidikan</a></li><li><a href="https://teknik.unimal.ac.id/index/category/6/lowongan-kerja">Lowongan Kerja</a></li><li><a href="https://teknik.unimal.ac.id/index/category/7/beasiswa">Beasiswa</a></li></ul>    
                      </div>
                  </div>        
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