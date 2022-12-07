<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVisimisisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('visimisis', function (Blueprint $table) {
            $table->id();
            $table->string('visi');
            $table->text('misi1');
            $table->text('misi2');
            $table->text('misi3');
            $table->text('misi4');
            $table->text('misi5')->nullable();
            $table->text('misi6')->nullable();
            $table->text('tujuan1');
            $table->text('tujuan2');
            $table->text('tujuan3');
            $table->text('tujuan4');
            $table->text('tujuan5')->nullable();
            $table->text('tujuan6')->nullable();
            $table->text('sasaran1');
            $table->text('sasaran2');
            $table->text('sasaran3');
            $table->text('sasaran4');
            $table->text('sasaran5');
            $table->text('sasaran6')->nullable();
            $table->text('sasaran7')->nullable();
            $table->text('sasaran8')->nullable();
            $table->text('sasaran9')->nullable();
            $table->text('sasaran10')->nullable();
            $table->text('sasaran11')->nullable();
            $table->text('sasaran12')->nullable();
            $table->text('sasaran13')->nullable();
            $table->bigInteger('prodi_id')->unsigned();
            $table->foreign('prodi_id')->references('id')->on('prodis')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('visimisis');
    }
}
