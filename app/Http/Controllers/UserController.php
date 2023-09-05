<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
  public function check(Request $request)
  {
    return response([
      'user' => auth()->user(),
      'token' => $request->bearerToken(),
    ], 200);
  }

  public function store(Request $request)
  {
    $fields = $request->validate([
      'name' => 'required|string',
      'email' => 'required|email|unique:users,email',
      'password' => 'required|string|confirmed',
    ]);

    $user = User::create([
      'name' => $fields['name'],
      'email' => $fields['email'],
      'password' => bcrypt($fields['password']),
    ]);

    $token = $user->createToken('token')->plainTextToken;

    return response([
      'user' => $user,
      'token' => $token,
    ], 201);
  }

  public function login(Request $request)
  {
    $fields = $request->validate([
      'email' => 'required|email',
      'password' => 'required|string',
    ]);

    $user = User::where('email', $fields['email'])->first();

    if (!$user || !Hash::check($fields['password'], $user->password)) {
      return response([
        'message' => 'Неверные учетные данные',
      ], 400);
    }

    $token = $user->createToken('token')->plainTextToken;

    return response([
      'user' => $user,
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
}
