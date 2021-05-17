<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Accounts extends Model
{
    use HasFactory;

    protected $table = "accounts";
    protected $fillable = ["brand", "title", "background", "phone_numbers", "address", "user_id"];

    public function background()
    {
        return $this->hasMany(Background::class);
    }
}
