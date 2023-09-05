<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\StoreProductRequest;
use App\Http\Requests\Product\UpdateProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{

    function index()
    {
        return inertia('Products/Index', [
            'products' => fn () => ProductResource::collection(Product::all()),
        ]);
    }

    function store(StoreProductRequest $request)
    {
        $data = $request->validated();
        if ($data['photo'] instanceof UploadedFile) {
            $data['photo'] = Storage::putFile('public/products', $data['photo']);
        }
        $product = Product::create($data);

        return redirect()->back()->with(['message' => 'Product Created', 'type' => 'success']);
    }

    function update(UpdateProductRequest $request, Product $product)
    {
        $data = $request->validated();
        if (isset($data['photo']) && $data['photo'] instanceof UploadedFile) {
            $data['photo'] = Storage::putFile('public/products', $data['photo']);
        }
        $product = $product->update($request->validated());

        return redirect()->back()->with(['message' => 'Product Updated', 'type' => 'success']);
    }

    function destroy(Product $product)
    {
        $product->delete();

        return redirect()->back()->with(['message' => 'Product Deleted', 'type' => 'success']);
    }
}
