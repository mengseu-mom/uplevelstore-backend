<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AddtoCart;
use App\Models\CheckOut;

class CheckOutController extends Controller
{
    
public function checkout(Request $request)
{
    $request->validate([
        'first_name' => 'required|string',
        'last_name' => 'required|string',
        'city' => 'required|string',
        'phone' => 'required|string',
        'email' => 'required|email',
        'user_id' => 'required|integer', 
    ]);

    $cartItems = AddtoCart::where('userId', $request->user_id)->get();

    if ($cartItems->isEmpty()) {
        return response()->json(['message' => 'Cart is empty'], 400);
    }

    // Delete previous pending orders
    CheckOut::where('userId', $request->user_id)
        ->where('status', 'pending')
        ->delete();

    $order = CheckOut::create([
        'first_name' => $request->first_name,
        'last_name' => $request->last_name,
        'city' => $request->city,
        'phone' => $request->phone,
        'email' => $request->email,
        'userId' => $request->user_id
    ]);

    return response()->json([
        'message' => 'Checkout successful',
        'order_id' => $order->id,
    ]);
}


    

}
