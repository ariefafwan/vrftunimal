<?php

namespace Database\Seeders;

use App\Models\Akreditasi;
use Illuminate\Database\Seeder;

class AkreditasiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Akreditasi::Create([
            'name' => 'Sertifikat Akreditasi Teknik Sipil 2017-2022',
            'prodi_id' => '2',
            'file' => 'Sertifikat_Akreditasi_Teknik_Sipil_2017-2022.pdf'
        ]);

        Akreditasi::Create([
            'name' => 'Sertifikat Akreditasi Teknik Mesin 2017-2022',
            'prodi_id' => '3',
            'file' => 'Sertifikat_Akreditasi_Teknik_Mesin_2017-2022.pdf'
        ]);

        Akreditasi::Create([
            'name' => 'Sertifikat Akreditasi Teknik Kimia 2017-2022',
            'prodi_id' => '4',
            'file' => 'Sertifikat_Akreditasi_Teknik_Kimia_2017-2022.pdf'
        ]);
        
        Akreditasi::Create([
            'name' => 'Sertifikat Akreditasi Teknik Industri 2017-2022',
            'prodi_id' => '5',
            'file' => 'Sertifikat_Akreditasi_Teknik_Industri_2017-2022.pdf'
        ]);

        Akreditasi::Create([
            'name' => 'Sertifikat Akreditasi Teknik Elektro 2017-2022',
            'prodi_id' => '6',
            'file' => 'Sertifikat_Akreditasi_Teknik_Elektro_2017-2022.pdf'
        ]);

        Akreditasi::Create([
            'name' => 'Sertifikat Akreditasi Teknik Informatika 2017-2022',
            'prodi_id' => '7',
            'file' => 'Sertifikat_Akreditasi_Teknik_Informatika_2017-2022.pdf'
        ]);

        Akreditasi::Create([
            'name' => 'Sertifikat Akreditasi Teknik Arsitektur 2017-2022',
            'prodi_id' => '8',
            'file' => 'Sertifikat_Akreditasi_Arsitektur_2017-2022.pdf'
        ]);

        Akreditasi::Create([
            'name' => 'Sertifikat Akreditasi Sistem Informasi 2022-2027',
            'prodi_id' => '9',
            'file' => 'Sertifikat_Akreditasi_Sistem_Informasi_2022-2027.pdf'
        ]);

        Akreditasi::Create([
            'name' => 'Sertifikat Akreditasi Teknik Material 2022-2027',
            'prodi_id' => '10',
            'file' => 'Sertifikat_Akreditasi_Teknik_Material_2022-2027.pdf'
        ]);

        Akreditasi::Create([
            'name' => 'Sertifikat Akreditasi Teknik Logistik 2022-2027',
            'prodi_id' => '11',
            'file' => 'Sertifikat_Akreditasi_Teknik_Logistik_2022-2027.pdf'
        ]);
    }
}
