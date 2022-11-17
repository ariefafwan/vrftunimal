<?php

namespace Database\Seeders;

use App\Models\Dosen;
use Illuminate\Database\Seeder;

class DosenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Dosen::Create([
            'name' => 'Dr. Muhammad, S.T., M.Sc',
            'prodi_id' => '6',
            'nip' => '196805252002121004',
            'nidn' => '0025056809'
        ]);
    }
}
