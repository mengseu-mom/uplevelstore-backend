<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained()->onDelete('cascade');
            $table->string('brand');
            $table->string('model');
            $table->decimal('price', 10, 2);
            $table->json('image');
            $table->string('ram')->nullable();
            $table->string('battery')->nullable();
            $table->string('display')->nullable();
            $table->string('refresh_rate')->nullable();
            $table->string('camera')->nullable();
            $table->string('chip')->nullable();
            $table->string('cpu')->nullable();
            $table->string('storage')->nullable();
            $table->string('os')->nullable();
            $table->string('network')->nullable();
            $table->boolean('bestsaller')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
