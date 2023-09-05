<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    function index()
    {
        $stats = [
            'users_count' => User::count(),
            'active_users_count' => User::active()->count(),
            'products_count' => Product::active()->count(),
            'active_products_count' => Product::active()->count(),
        ];
        $latestTenProducts = Product::latest()->limit(10)->get();

        return inertia('Dashboard', [
            'stats' => fn () => $stats,
            'latestProducts' => fn () => $latestTenProducts,
        ]);
    }
}
