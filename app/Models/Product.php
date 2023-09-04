<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'price',
        'photo',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    function photoUrl(): Attribute
    {
        return Attribute::make(
            get: function ($value) {
                return !is_null($this->photo) ? Storage::url($this->photo) : null;
            },
        );
    }
}
