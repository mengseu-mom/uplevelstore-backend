<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CheckOut extends Model
{
    protected $fillable = [
    'first_name', 'last_name', 'city', 'phone', 'email','userId'
    ];

    public function user()
    {
        return $this->belongsTo(User::class,);
    }
}
