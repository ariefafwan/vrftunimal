<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(RoleSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(ProdiSeeder::class);
        $this->call(KatberitaSeeder::class);
        $this->call(DosenSeeder::class);
        $this->call(BeritaSeeder::class);
        $this->call(SejarahSeeder::class);
        $this->call(VisimisiSeeder::class);
        $this->call(PimpinanSeeder::class);
        $this->call(KalenderSeeder::class);
        $this->call(AkreditasiSeeder::class);
    }
}
