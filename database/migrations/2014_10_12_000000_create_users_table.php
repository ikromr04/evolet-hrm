<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('users', function (Blueprint $table) {
      $table->id();
      $table->string('name', 100);
      $table->string('surname', 100);
      $table->string('patronymic', 100);
      $table->string('login')->unique();
      $table->string('avatar')->nullable();
      $table->timestamp('started_work_at');
      $table->string('password');
      $table->integer('job_id')->nullable();
      $table->integer('position_id')->nullable();
      $table->rememberToken();
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
    Schema::dropIfExists('users');
  }
}
