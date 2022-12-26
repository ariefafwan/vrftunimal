<?php

namespace Database\Seeders;

use App\Models\Pimpinan;
use Illuminate\Database\Seeder;

class PimpinanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Pimpinan::Create([
            'name' => 'Dr. Muhammad, S.T., M.Sc',
            'jabatan' => 'Dekan Fakultas Teknik',
            'nip' => '196805252002121004',
            'nidn' => '0025056809',
            'profile_img' => 'dekanganteng.jpg'
        ]);

        Pimpinan::Create([
            'name' => 'Dr. Ars. Rinaldi Mirsa, S.T., M.T',
            'jabatan' => 'Wakil Dekan Bidang Akademik',
            'nip' => '197412012006041001',
            'nidn' => '0001127405',
            'profile_img' => 'pakreiganteng.jpg'
        ]);

        Pimpinan::Create([
            'name' => 'Reza Putra, S.T., M.Eng',
            'jabatan' => 'Wakil Dekan Bidang Administrasi Umum & Keuangan',
            'nip' => '197806292005011004',
            'nidn' => '0029067801',
            'profile_img' => 'pakrejaganteng.jpg'
        ]);

        Pimpinan::Create([
            'name' => 'Muhammad, S.T., M.Eng',
            'jabatan' => 'Wakil Dekan Bidang Kemahasiswaan & Alumni',
            'nip' => '197307012005011002',
            'nidn' => '0025056809',
            'profile_img' => 'abiganteng.jpg'
        ]);
    }
}
