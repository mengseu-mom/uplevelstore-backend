<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
     public function index()
    {
        return Products::with('category')->get();
    }

    public function show($id)
    {
        $product = Products::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json($product);
    }

     public function store(Request $request)
    {
         $validate = $request->validate([
        'category_id' => 'required|exists:categories,id',
        'brand' => 'required|string',
        'model' => 'required|string',
        'price' => 'required|numeric',
        'images' => 'required|array',
        'images.*.color' => 'required|string',
        'images.*.file' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
        'ram' => 'nullable',
        'battery' => 'nullable',
        'display' => 'nullable',
        'refresh_rate' => 'nullable',
        'camera' => 'nullable',
        'chip' => 'nullable',
        'cpu' => 'nullable',
        'storage' => 'nullable',
        'os' => 'nullable',
        'network' => 'nullable',
        'bestsaller'=>'nullable'
    ]);

    $imagePaths = [];

    foreach ($request->images as $img) {
        if (isset($img['file']) && isset($img['color'])) {
            $file = $img['file'];
            $color = $img['color'];
            $path = $file->store('products', 'public');

            // Add to image array
            $imagePaths[] = [
                'color' => $color,
                'path' => $path
            ];
        }
    }

    // ✅ Create product only once, after images are handled
    $product = Products::create([
            'category_id' => $validate['category_id'],
            'brand' => $validate['brand'],
            'model' => $validate['model'],
            'price' => $validate['price'],
            'image' => json_encode($imagePaths),
            'ram' => $validate['ram'] ?? null,
            'battery' => $validate['battery'] ?? null,
            'display' => $validate['display'] ?? null,
            'refresh_rate' => $validate['refresh_rate'] ?? null,
            'camera' => $validate['camera'] ?? null,
            'chip' => $validate['chip'] ?? null,
            'cpu' => $validate['cpu'] ?? null,
            'storage' => $validate['storage'] ?? null,
            'os' => $validate['os'] ?? null,
            'network' => $validate['network'] ?? null,
            'bestsaller' => $validate['bestsaller'] ?? null,
    ]);

    return response()->json($product->load('category'), 201);
    }




 public function update(Request $request, string $id)
{
    // Validation rules
    $validate = $request->validate([
        'category_id' => 'required|exists:categories,id',
        'brand' => 'required|string',
        'model' => 'required|string',
        'price' => 'required|numeric',
        'images' => 'required|array',
        'images.*.color' => 'required|string',
        'images.*.file' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
        'images.*.existing_path' => 'nullable|string',
        'ram' => 'nullable|string',
        'battery' => 'nullable|string',
        'display' => 'nullable|string',
        'refresh_rate' => 'nullable|string',
        'camera' => 'nullable|string',
        'chip' => 'nullable|string',
        'cpu' => 'nullable|string',
        'storage' => 'nullable|string',
        'os' => 'nullable|string',
        'network' => 'nullable|string',
        'bestsaller' => 'nullable|in:true,false,1,0',
    ]);

    $imagePaths = [];

    // Process image inputs
    foreach ($request->input('images', []) as $index => $imageData) {
        $color = $imageData['color'] ?? '';

        if ($request->hasFile("images.$index.file")) {
            $file = $request->file("images.$index.file");
            $path = $file->store('products', 'public');
        } elseif (!empty($imageData['existing_path'])) {
            $path = $imageData['existing_path'];
        } else {
            continue; // Skip if no new file or existing path
        }

        $imagePaths[] = [
            'color' => $color,
            'path' => $path
        ];
    }

    $product = Products::findOrFail($id);

    // Update the product
    $product->update([
        'category_id' => $validate['category_id'],
        'brand' => $validate['brand'],
        'model' => $validate['model'],
        'price' => $validate['price'],
        'image' => json_encode($imagePaths),
        'ram' => $validate['ram'] ?? null,
        'battery' => $validate['battery'] ?? null,
        'display' => $validate['display'] ?? null,
        'refresh_rate' => $validate['refresh_rate'] ?? null,
        'camera' => $validate['camera'] ?? null,
        'chip' => $validate['chip'] ?? null,
        'cpu' => $validate['cpu'] ?? null,
        'storage' => $validate['storage'] ?? null,
        'os' => $validate['os'] ?? null,
        'network' => $validate['network'] ?? null,
        'bestsaller' => filter_var($validate['bestsaller'] ?? false, FILTER_VALIDATE_BOOLEAN),
    ]);

    return response()->json($product->load('category'), 200);
}






    public function destroy(string $id)
    {
        $pro=Products::find($id);
        $pro->delete();
        return response()->json($pro);
    }

}
