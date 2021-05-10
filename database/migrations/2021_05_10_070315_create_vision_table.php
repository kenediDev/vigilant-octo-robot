<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVisionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vision', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("title");
            $table->binary("image");
            $table->longText("caption");
        });

        Schema::table('vision', function (Blueprint $table) {
            $table->foreignId("user_id")->constrained("users")->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vision');
    }
}
