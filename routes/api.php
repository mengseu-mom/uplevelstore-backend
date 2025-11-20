<?php

use App\Http\Controllers\AddToCartController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CheckOutController;
use App\Models\Transaction;
use App\Http\Controllers\TransactionController;
// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');




Route::middleware(["auth:api"])->group(function(){

});






Route::get('/products', [ProductsController::class, 'index']);
Route::get('/products/{id}', [ProductsController::class, 'show']);
Route::post('/products', [ProductsController::class, 'store']);
Route::put('/products/{id}',[ProductsController::class,'update']);
Route::delete('/products/{id}',[ProductsController::class,'destroy']);

Route::get('/categories', [CategoryController::class, 'index']);
Route::post('/categories', [CategoryController::class, 'store']);

Route::get('/banners', [BannerController::class, 'index']);
Route::post('/banners', [BannerController::class, 'store']);
Route::get('/banners/{id}', [BannerController::class, 'show']);
Route::put('/banners/{id}', [BannerController::class, 'update']);
Route::delete('/banners/{id}', [BannerController::class, 'destroy']);

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);


Route::get('/cart', [AddToCartController::class, 'index']);
Route::post('/cart', [AddToCartController::class, 'store']);
Route::get('/cart/{userId}', [AddToCartController::class, 'getByUser']);
Route::put('/cart/{id}', [AddToCartController::class, 'updateByUser']);
Route::delete('/cart/{id}', [AddToCartController::class, 'destroy']);
Route::delete('/cart/clear/{userId}', [AddToCartController::class, 'clearUserCart']);

Route::post('/checkout',[ CheckOutController::class, 'checkout']);
Route::post('/transactions', [TransactionController::class, 'createTransaction']);
Route::get('/transactions/user/{userId}', [TransactionController::class, 'showByUser']);
