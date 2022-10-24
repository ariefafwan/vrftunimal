<!-- ======= Footer ======= -->
<footer id="footer" class="footer header-dark bg-dark">
  

    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-6 col-md-6 footer-contact">
            <h3 class="text-dark">Fakultas Teknik UNIMAL</h3>
            <p>
              Fakultas Teknik, Universitas Malikussaleh<br>
              Kampus Bukit Indah, Jalan Batam<br>
              Blang Pulo Muara Satu, Lhokseumawe, Provinsi Aceh, Indonesia<br>
              Email : ft@unimal.ac.id <br><br>
            </p>
          </div>

          <div class="col-lg-3 col-md-5 footer-links">
            <h4 class="text-dark">Berita Terbaru</h4>
            <ul>
              <div class="row">
                <!-- berita -->
                @php
                  $i = 1;
                @endphp
                @foreach ($berita as $row)
                <li><i class="bx bx-chevron-right"></i> <a href="{{ route('show',$row->id) }}">{{ Str::limit(strip_tags($row->title),40) }}</a></li>
                @if ($i % 4 == 0)
                  <div class="clearfix visible-md visible-lg"></div>
                @endif
                @php
                  $i++;
                @endphp
                @endforeach
                <!-- berita -->
              </div>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4 class="text-dark">Our Social Networks</h4>
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
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer><!-- End Footer -->