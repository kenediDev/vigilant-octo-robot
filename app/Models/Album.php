<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    use HasFactory;

    protected $table = "album";
    protected $fillable = [
        'title', 'caption', 'photo', 'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
