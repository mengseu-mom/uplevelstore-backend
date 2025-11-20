<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('userId'); // Only associate by userId, no foreign key
            $table->json('image');
            $table->json("name");
            $table->string('payment_method');     // e.g. ABA, Wing, Visa
            $table->string('transaction_id')->nullable(); // Optional transaction 
            $table->json('price');
            $table->json('qty');
            $table->json('amount');
            $table->string('status')->default('success'); // success, failed, etc.
            $table->timestamp('paid_at')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('transactions');
    }
};
