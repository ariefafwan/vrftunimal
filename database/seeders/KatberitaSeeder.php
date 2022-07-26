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
            'name' => 'akademik',
            'slug' => 'akademik',
            'status' => '1',
            'image' => 'afwan.jpg'
        ]);

        Katberita::Create([
            'name' => 'mahasiswa',
            'slug' => 'mahasiswa',
            'status' => '1',
            'image' => 'afwan.jpg'
        ]);

        Katberita::Create([
            'name' => 'teknik',
            'slug' => 'teknik',
            'status' => '1',
            'image' => 'afwan.jpg'
        ]);
    }
}
