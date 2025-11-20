<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
   public function register(Request $request)
{
    try {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        if (!$user) {
            return response()->json(['error' => 'User creation failed'], 500);
        }

        return response()->json([
            'user' => $user,
            'message' => 'User registered successfully'
        ], 201);

    } catch (\Exception $e) {
        Log::error('Registration error: ' . $e->getMessage());
        return response()->json(['error' => 'Something went wrong'], 500);
    }
}

        // 
        

        // Login a user and return a JWT token
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

            // Attempt to verify the credentials and create a token
        if (!$token = JWTAuth::attempt($request->only('email', 'password'))) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

            return response()->json([
                'access_token' => $token,
                'user'=>JWTAuth::user()->load('profile')
            ]);
    }
}
