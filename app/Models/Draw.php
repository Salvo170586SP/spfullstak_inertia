<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Draw extends Model
{
    use HasFactory;

    protected $fillable = ['draw_title', 'draw_img', 'draw_url'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
