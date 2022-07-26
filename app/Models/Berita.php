<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Berita extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'details',
        'katberita_id',
        'image',
        'status',
        'featured',
        'prodi_id',

    ];

    public function katberita()
    {
        return $this->belongsTo(Katberita::class);
    }

    public function prodi()
    {
        return $this->belongsTo(Prodi::class);
    }
}
