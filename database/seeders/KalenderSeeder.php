<?php

namespace Database\Seeders;

use App\Models\Kalender;
use Illuminate\Database\Seeder;

class KalenderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Kalender::Create([
            'name' => 'Kalender Akademik 2022/2023',
            'file' => 'Kalender Akademik 2022-2023.pdf'
        ]);
    }
}
