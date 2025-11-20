<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
        protected $fillable = [
    'category_id', 'brand', 'model', 'price', 'image',
    'ram', 'battery', 'display', 'refresh_rate', 'camera',
    'chip', 'cpu', 'storage', 'os', 'network', 'bestsaller'
];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
