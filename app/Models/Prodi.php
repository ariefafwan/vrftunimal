<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prodi extends Model
{
    use HasFactory;

    public function berita()
    {
        return $this->hasMany(Berita::class);
    }

    public function dosen()
    {
        return $this->hasMany(Dosen::class);
    }
}
