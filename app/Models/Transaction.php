<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = [
        'userId',
        'image',
        'name',
        'payment_method',
        'transaction_id',
        'price',
        'qty',
        'amount',
        'status',
        'paid_at',
    ];
     protected $casts = [
        'image'=>"array",
        'name'=>'array',
        'price' => 'array',
        'qty' => 'array',
        'amount' => 'array',
    ];
}
