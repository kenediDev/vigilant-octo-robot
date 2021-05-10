<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonials extends Model
{
    use HasFactory;

    protected $table = "testimonials";
    protected $fillable = [
        "avatar", "name", "comment", "from", "user_id"
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
