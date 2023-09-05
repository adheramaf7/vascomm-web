<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class LandingController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return inertia('Landing/Index', [
            'newProducts' => fn () => ProductResource::collection(Product::latest()->active()->limit(5)->get()),
            'allProducts' => fn () => ProductResource::collection(Product::active()->get()),
        ]);
    }
}
