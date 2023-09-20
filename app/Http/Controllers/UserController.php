<?php

namespace App\Http\Controllers;

use App\Models\PersonalData;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
  public function check(Request $request)
  {
    $user = User::with('job', 'position')->find(auth()->user()->id);

    return response([
      'employee' => $user,
      'token' => $request->bearerToken(),
    ], 200);
  }

  public function store(Request $request)
  {
    $fields = $request->validate([
      'name' => 'required|string',
      'login' => 'required|unique:users,login',
      'password' => 'required|string|confirmed',
    ]);

    $user = User::create([
      'name' => $fields['name'],
      'login' => $fields['login'],
      'password' => bcrypt($fields['password']),
    ]);

    $token = $user->createToken('token')->plainTextToken;

    return response([
      'user' => $user,
      'token' => $token,
    ], 201);
  }

  public function update($employeeId)
  {
    request()->validate([
      'name' => 'required|string',
      'surname' => 'required|string',
      'patronymic' => 'required|string',
      'login' => 'required',
      'started_work_at' => 'required',
    ]);

    $user = User::with('job', 'position')->find($employeeId);

    if (request('login') != $user->login) {
      request()->validate([
        'login' => 'unique:users,login',
      ]);
      $user->update([
        'login' => request('login'),
      ]);
    }

    $user->update([
      'name' => request('name'),
      'surname' => request('surname'),
      'patronymic' => request('patronymic'),
      'started_work_at' => request('started_work_at'),
    ]);

    return $user;
  }

  public function show($employeeId) {
    return User::with('job', 'position')->find($employeeId);
  }

  public function login(Request $request)
  {
    $fields = $request->validate([
      'login' => 'required',
      'password' => 'required|string',
    ]);

    $user = User::with('job', 'position')->where('login', $fields['login'])->first();

    if (!$user || !Hash::check($fields['password'], $user->password)) {
      return response([
        'message' => 'Неверные учетные данные',
      ], 400);
    }

    $token = $user->createToken('token')->plainTextToken;

    return response([
      'employee' => $user,
      'token' => $token,
    ], 200);
  }

  public function logout(Request $request)
  {
    $request->user()->currentAccessToken()->delete();

    return response([
      'message' => 'Вы вышли из системы',
    ], 200);
  }

  public function personalData($employeeId)
  {
    return PersonalData::where('user_id', $employeeId)->first();
  }

  public function updateAvatar($employeeId)
  {
    $user = User::with('job', 'position')->find($employeeId);

    if ($user->avatar && file_exists(public_path($user->avatar))) {
      unlink(public_path($user->avatar));
    }

    $file = request()->file('avatar');
    $fileName = uniqid() . '.' . $file->extension();
    $file->move(public_path('img/users'), $fileName);

    $user->avatar = '/img/users/' . $fileName;
    $user->update();

    return $user;
  }

  public function deleteAvatar($employeeId)
  {
    $user = User::with('job', 'position')->find($employeeId);

    if ($user->avatar && file_exists(public_path($user->avatar))) {
      unlink(public_path($user->avatar));

      $user->avatar = null;
      $user->update();
    }

    return $user;
  }
}
