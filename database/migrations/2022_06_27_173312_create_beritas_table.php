<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBeritasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('beritas', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->text('details1');
            $table->text('details2')->nullable();
            $table->text('details3')->nullable();
            $table->text('details4')->nullable();
            $table->text('details5')->nullable();
            $table->text('details6')->nullable();
            $table->string('image');
            $table->bigInteger('prodi_id')->unsigned();
            $table->foreign('prodi_id')->references('id')->on('prodis')->onDelete('cascade')->onUpdate('cascade');
            $table->bigInteger('katberita_id')->unsigned();
            $table->foreign('katberita_id')->references('id')->on('katberitas')->onDelete('cascade')->onUpdate('cascade');
            $table->boolean('status');
            $table->boolean('featured');
            $table->integer('view_count')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('beritas');
    }
}
