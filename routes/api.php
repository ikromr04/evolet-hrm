<?php

use App\Http\Controllers\EducationController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\PositionController;
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

  Route::get('/employees/{employeeId}', [UserController::class, 'show']);
  Route::put('/employees/{employeeId}', [UserController::class, 'update']);
  Route::get('/employees/{employeeId}/next', [UserController::class, 'next']);
  Route::get('/employees/{employeeId}/previous', [UserController::class, 'previous']);
  Route::put('/employees/{employeeId}/avatar', [UserController::class, 'updateAvatar']);
  Route::delete('/employees/{employeeId}/avatar', [UserController::class, 'deleteAvatar']);
  Route::get('/employees/{employeeId}/personal', [UserController::class, 'personalData']);
  Route::put('/employees/{employeeId}/personal', [UserController::class, 'updatePersonalData']);
  Route::get('/employees/{employeeId}/educations', [UserController::class, 'educations']);
  Route::post('/employees/{employeeId}/educations', [UserController::class, 'storeEducation']);
  Route::post('/employees/{employeeId}/languages', [UserController::class, 'createOrUpdateLanguages']);

  Route::put('/educations/{educationId}', [EducationController::class, 'update']);
  Route::delete('/educations/{educationId}', [EducationController::class, 'delete']);

  Route::get('/jobs', [JobController::class, 'index']);

  Route::get('/positions', [PositionController::class, 'index']);

  Route::get('/languages', [LanguageController::class, 'index']);
});
