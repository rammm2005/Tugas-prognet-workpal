<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_reports', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('user_id'); 
            $table->uuid('reported_by');

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('reported_by')->references('id')->on('users')->onDelete('cascade');

            $table->enum('status', ['pending', 'in_progress', 'accepted', 'rejected'])->default('pending');

            $table->text('report_reason')->nullable();
            $table->text('report_response')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_reports');
    }
};
