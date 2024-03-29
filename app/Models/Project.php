<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['project_title', 'project_img', 'project_url'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
