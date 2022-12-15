<?php

namespace Database\Seeders;

use App\Models\Berita;
use Illuminate\Database\Seeder;

class BeritaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Berita::Create([
            'title' => 'Seminar Nasional Fakultas Teknik Unimal Menjadi Ajang Paling Bergengsi',
            'slug' => 'seminar-nasional-fakultas-teknik-unimal-menjadi-ajang-paling-bergengsi',
            'image' => 'Untitled.jpg',
            'prodi_id' => '1',
            'katberita_id' => '1',
            'status' => '1',
            'featured' => '0',
            'details1' => 'Lhokseumawe- Fakultas Teknik Universitas Malikussleh, melaksanakan Seminar Nasional Fakultas Teknik (SNFT) 2022, Kamis (21/7/2022). Ajang presentasi riset ilmiah tersebut menjadi salah satu kegiatan paling bergensi yang pernah diadakan di Unimal. Mengingat antusiasme peserta sangat besar dari Sabang sampai Maroeke. Ada 25 perguruan tinggi negeri dan swasta seluruh Indonesia mengirimkan papernya ke panitia dengan jumlah peserta mencapai 300 orang.',
            'details2' => 'Rektor Unimal, Prof Herman Fithra, ASEAN Eng dalam arahannya menyampaikan rasa syukur atas terlaksananya SNFT 2022 tersebut. Dia juga mengapresiasi kerjakeras panitia yang mampu menghadirkan peserta dari barat sampai timur Indonesia. Apresiasi khusus juga disampaikan kepada universitas dan perguruan tinggi yang ada di Indonesia Timur, terutama yang ada di daerah papua, sudah berkenan berpartisipasi dalam kegiatan seminar yang dilaksanakan Fakultas Teknik Unimal. “Secara khusus, teman-teman Indonesia Timur dapat bergabung dengan Unimal.”ujarya.',
            'details3' => 'Dekan Fakultas Teknik Unimal, Dr Muhammad, MSc mengharapkan kegiatan SNFT kali ini bukan hanya sekedar tempat berkumpul, tapi seminar nasional dapat dijadikan ajang untuk berbagi ilmu dan pengatahuan dengan berbagai latar belakang dan kemampuan yang dimiliki peserta. Seminar dapat menjadi ruang untuk menyambung ide untuk membangun dan mengembangkan pengetahuan di tengah revolusi industri 4.0. Di sisi lain, SNFT juga bisa menjadi ruang untuk menjalin silaturahmi dengan para peneliti dan dosen dari berbagai perguruan tinggi negeri dan swasta. “Juga dengan berbagai stakeholder yang selama ini sudah terjalin kerjasama yang baik,”harapnya.',
            'details4' => 'Ketua pelaksana SNFT 2022, Munirul Ula PhD mengatakan, kegiatan seminar yang  menghadirkan pemateri dari berbagai perguruan tinggi, instansi pemerintah, dan swasta tersebut mengundang antusiasme peserta di luar prediksi yang mencapai 300 peserta dan pemakalah. Tingginya minat peserta seminar juga terlihat dari banyaknya paper yang diterima oleh panitia pelaksana, mencapai 200 paper inovasi riset dari 25 universitas seluruh Indonesia. “Namun, kita hanya menerima 127 paper terbaik untuk diikutsertakan dalam seminar kali ini,”terangnya.',
            'details5' => 'Sementara, Ketua Bidang Kesekretariatan, Prof Dahlan Abdullah ASEAN Eng menambahkan bahwa salah satu faktor penyebab tingginya minat peserta SNFT Unimal tahun ini, mungkin luasnya cakupkan bidang ilmu yang kita tawarkan untuk pengajuan paper. Yang lebih mengesankan, paper lokal Fakultas Teknik Unimal mencapai 92 paper. Artinya sudah ada keinginan insan akedimis, khususnya dosen di lingkungan fakultas teknik untuk melakukan perubahan signifikan mengikuti kemajuan pengetahuan dan perkembangan teknologi. “Kami berharap SNFT dapat menjadi agenda rutin FT, ke depan kita akan bergerak menuju conference international ICET,”tegasnya.',
            'details6' => 'Seperti diberitakan sebelumnya, SNFT 2022 mengusung tema “Inovasi riset dan teknologi berbasis potensi lokal” dengan menghadirkan pemateri,  antara lain Prof Achmad Benny Mutiara dari APTIKOM, Dr Jarot Rahardjo dari Badan Riset dan Inovasi Nasional (BRIN), Dr Muttaqin dosen Teknik Sipil Universitas Syiah Kuala, guru besar Teknik Mesin dan Industri UGM, Prof M Noer Ilman, guru besar Teknik Industri Unand, Prof Rika Ampuh Hadiguna, dan Dr Anggi Bayu Ariwibowo dari PT Hutama Karya'
        ]);

        Berita::Create([
            'title' => 'Mahasiswa Kembar Sempro Perdana di Magister Teknologi Informasi',
            'slug' => 'mahasiswa-kembar-sempro-perdana-di-magister-teknologi-informasi',
            'image' => 'title.jpeg',
            'prodi_id' => '1',
            'katberita_id' => '1',
            'status' => '1',
            'featured' => '0',
            'details1' => 'Bukit Indah- Program Studi Magister Teknologi Informasi, Fakultas Teknik, Universitas Malikussaleh menggelar seminar proposal perdana, Senin (6/6/2022). Seminar proposal penelitian tesis itu menjadi istimewa karena diikuti dua mahasiswi kembar angkatan pertama di prodi tersebut.',
            'details2' => 'Ketua Program Studi Magister Teknologi Informasi, Unimal, Dr Nurdin MKom mengatakan seminar perdana yang digelar pihaknya menjadi motivasi awal untuk terus mengembangkan program studi dalam mencetak lulusan yang berkualitas dan mampu bersaing dengan berbagai lulusan perguruan tinggi lainnya, baik dalam dan luar negeri.',
            'details3' => '“Chicha Rizka Gunawan dan Chichi Rizka Gunawan merupakan mahasiswa kembar asal Kota Langsa yang akan menyesaikan kuliahnya di Prodi TI, setelah mereka menyesaikan serangkaian proses penyusunan tesis, seminar, dan sidang nantinya,”terangnya.',
            'details4' => 'Chicha dan Chichi merupakan mahasiswa bimbingannya bersama Ketua Jurusan Matematika Fakultas Keguruan dan Ilmu Pendidikan (FKIP) Unimal, Dr. Fajriana. Sedangkan penguji seminar proposal keduanya masing-masing terdiri dari Ketua Jurusan Teknik Elektro, Prof Dahlan Abdullah, ASEAN,Eng  dan Ketua Jurusan Teknik Informatika, Munirul Ula, Ph.D, Di hadapan penguji Chicha mempresentasikan “Pengenalan Pakaian Adat Aceh Berbasis Augmented Reality menggunakan Algoritma Speed Up Robust Featured (SURF)” dan Chichi mengajukan judul “Deteksi Objek Secara Realtime dengan YOLOv3 menggunakan Metode Convolutional Neural Network (CNN).',
            'details5' => '“Kita mulai seminar proposal perdana ini dengan kualitas proposal yang baik dan sesuai dengan metodologi penelitian agar ke depan  mahasiwa Magister Teknologi Informasi lain dapat mengikutinya,”tegasnya.Prof Dahlan Abdullah dan Munirul Ula, Ph.D selaku dosen penguji berharap hasil seminar proposal ini bisa menjadi suatu penelitian yang baik dalam memenuhi salah satu syarat untuk bisa menyelesaikan pendidikan di Magister Teknologi Informasi Fakultas Teknik Unimal. “Yang penting kegiatan ini bisa menjadi contoh bagi mahasiswa lain dan harapan kita pada 2023 Magister Teknologi Informasi, Unimal bisa menghasilkan lulusan perdana,” terang keduanya.[ded]',
        ]);

        Berita::Create([
            'title' => 'Surat Edaran Rektor Nomor 5 Tahun 2021 Tentang Pelaksanaan Kegiatan Akademik Semester Ganjil 2020/2021',
            'slug' => 'surat-edaran-rektor-nomor5-tahun-2021-tentang-pelaksanaan-kegiatan-akademik-semester-ganjil-2020/2021',
            'image' => 'Se-rektor-baru.jpg',
            'prodi_id' => '1',
            'katberita_id' => '1',
            'status' => '1',
            'featured' => '0',
            'details1' => 'Surat Edaran Rektor Nomor 5 Tahun 2021 Tentang Pelaksanaan Kegiatan Akademik Semester Ganjil 2020/2021',
        ]);
    }
}
