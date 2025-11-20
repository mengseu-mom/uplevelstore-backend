<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AddtoCart extends Model
{
        protected $fillable=[
        'name',
        'price',
        'qty',
        'image',
        'userId',
    ];
}
