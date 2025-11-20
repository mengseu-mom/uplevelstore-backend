<?php

namespace App\Http\Controllers;

use App\Models\AddtoCart;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AddToCartController extends Controller
{
    public function index()
    {
        $items = AddtoCart::all();
        return response()->json($items);
    }

  public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'price' => 'required|numeric',
            'qty' => 'required|integer|min:1',
            'image' => 'nullable|string',  // just one image path string
            'userId' => 'required|integer',
        ]);

        // Check if this product (by name) already exists in this user's cart
        $existing = AddtoCart::where('userId', $request->userId)
            ->where('name', $request->name)
            ->first();

        if ($existing) {
            // Update qty
            $existing->qty += $request->qty;
            $existing->save();

            return response()->json([
                'message' => 'Quantity updated',
                'data' => $existing,
            ]);
        } else {
            // Create new cart item
            $cart = AddtoCart::create([
                'name' => $request->name,
                'price' => $request->price,
                'qty' => $request->qty,
                'image' => $request->image,
                'userId' => $request->userId,
            ]);

            return response()->json([
                'message' => 'Added to cart',
                'data' => $cart,
            ], 201);
        }
    }

    // Get all cart items for a user
    public function getByUser($userId)
    {
        $items = AddtoCart::where('userId', $userId)->get();
        return response()->json($items);
    }

    //Update by user
    public function updateByUser(Request $request, $id)
    {
        $item = AddtoCart::find($id);
        if(!$item){
            return response()->json([
                'message' => 'Cart item not found'
            ],400);
        };
        $validated = $request->validate([
            'qty' => 'required|integer|min:1'
        ]);
        $item->update([
            'qty' => $validated['qty']
        ]);
        return response()->json([
            'message' => "update successfully",
            'Data' => $item
        ]);
    }

    // Delete a single cart item by cart id
    public function destroy($id)
    {
        $item = AddtoCart::find($id);
        if (!$item) {
            return response()->json(['message' => 'Cart item not found'], 404);
        }

        $item->delete();
        return response()->json(['message' => 'Item removed from cart']);
    }

    // Clear all cart items for a user
    public function clearUserCart($userId)
    {
        AddtoCart::where('userId', $userId)->delete();
        return response()->json(['message' => 'Cart cleared']);
    }
}
