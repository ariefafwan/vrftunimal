<?php

namespace Database\Seeders;

use App\Models\Katberita;
use GuzzleHttp\Promise\Create;
use Illuminate\Database\Seeder;

class KatberitaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Katberita::Create([
            'name' => 'akademik'
        ]);
        Katberita::Create([
            'name' => 'mahasiswa'
        ]);
        Katberita::Create([
            'name' => 'teknik'
        ]);
    }
}
