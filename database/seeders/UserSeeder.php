<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Administrator',
            'email' => 'administrator@unimal.ac.id',
            'role_id' => '1',
            'email_verified_at' => '2022-07-07 19:55:59',
            'password' => Hash::make('password')
        ]);
    }
}
