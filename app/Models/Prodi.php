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

    public function sejarah()
    {
        return $this->hasMany(Sejarah::class);
    }

    public function visimisi()
    {
        return $this->hasMany(Visimisi::class);
    }

    public function prestasi()
    {
        return $this->hasMany(Prestasi::class);
    }

    public function download()
    {
        return $this->hasMany(Download::class);
    }
}
