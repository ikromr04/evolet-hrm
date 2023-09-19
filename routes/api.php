<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/employees/register', [UserController::class, 'store']);
Route::post('/employees/login', [UserController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
  Route::get('/employees/login', [UserController::class, 'check']);
  Route::delete('/employees/logout', [UserController::class, 'logout']);
  Route::get('/employees/personal-data', [UserController::class, 'personalData']);
  Route::put('/employees/avatar', [UserController::class, 'updateAvatar']);
  Route::get('/employees/{employeeId}', [UserController::class, 'show']);
});
