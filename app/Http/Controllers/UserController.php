<?php

namespace App\Http\Controllers;

use App\Models\Education;
use App\Models\LaborActivity;
use App\Models\PersonalData;
use App\Models\User;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
  public function index()
  {
    return User::with('jobs', 'positions')->get();
  }

  public function quickAdd()
  {
    request()->validate([
      'name' => 'required|string',
      'surname' => 'required|string',
      'login' => 'required|unique:users,login',
    ]);

    $password = uniqid();

    $user = User::create([
      'name' => request('name'),
      'surname' => request('surname'),
      'patronymic' => request('patronymic'),
      'login' => request('login'),
      'password' => bcrypt($password),
      'started_work_at' => new DateTime(),
    ]);

    return response([
      'login' => $user->login,
      'password' => $password,
    ], 201);
  }

  public function check()
  {
    $user = auth()->user();
    $user->token = request()->bearerToken();

    return $user;
  }

  public function login()
  {
    request()->validate([
      'login' => 'required',
      'password' => 'required|string',
    ]);

    $user = User::where('login', request('login'))->first();

    if (!$user || !Hash::check(request('password'), $user->password)) {
      return response(['message' => 'Неверные учетные данные'], 400);
    }

    $user->token = $user->createToken('token')->plainTextToken;

    return $user;
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

    $user->token = $user->createToken('token')->plainTextToken;

    return $user;
  }

  public function update($employeeId)
  {
    request()->validate([
      'name' => 'required|string',
      'surname' => 'required|string',
      'started_work_at' => 'required',
    ]);

    $user = User::find($employeeId);

    if (request('login') != $user->login) {
      request()->validate([
        'login' => 'required|unique:users,login',
      ]);
      $user->update(['login' => request('login')]);
    }

    $user->update([
      'name' => request('name'),
      'surname' => request('surname'),
      'patronymic' => request('patronymic'),
      'started_work_at' => request('started_work_at'),
    ]);

    $user->jobs()->sync(request('jobs'));
    $user->positions()->sync(request('positions'));

    $user = User::with('jobs', 'positions', 'languages')->find($employeeId);
    $user = $this->appendNextPreviousEmployeesId($user);

    return $user;
  }

  public function show($employeeId) {
    $user = User::with('jobs', 'positions', 'languages')->find($employeeId);
    $user = $this->appendNextPreviousEmployeesId($user);

    return $user;
  }

  private function appendNextPreviousEmployeesId($user)
  {
    $nextId = User::where('id', '>', $user->id)->min('id');
    $prevId = User::where('id', '<', $user->id)->max('id');

    if ($nextId) {
      $user->next_employee_id = $nextId;
    } else {
      $user->next_employee_id = User::orderBy('id', 'asc')->first()->id;
    }
    if ($prevId) {
      $user->previous_employee_id = $prevId;
    } else {
      $user->previous_employee_id = User::orderBy('id', 'desc')->first()->id;
    }
    return $user;
  }

  public function logout()
  {
    request()->user()->currentAccessToken()->delete();
  }

  public function personalData($employeeId)
  {
    return PersonalData::where('user_id', $employeeId)->first();
  }

  public function updatePersonalData($employeeId)
  {
    $personalData = PersonalData::where('user_id', $employeeId)->first();
    if ($personalData) {
      $personalData->update([
        'birth_date' => request('birth_date'),
        'gender' => request('gender'),
        'nationality' => request('nationality'),
        'citizenship' => request('citizenship'),
        'address' => request('address'),
        'email' => request('email'),
        'tel_1' => request('tel_1'),
        'tel_2' => request('tel_2'),
        'family_status' => request('family_status'),
        'children' => request('children'),
      ]);
      return $personalData;
    }
    $personalData = PersonalData::create([
      'user_id' => $employeeId,
      'birth_date' => request('birth_date'),
      'gender' => request('gender'),
      'nationality' => request('nationality'),
      'citizenship' => request('citizenship'),
      'address' => request('address'),
      'email' => request('email'),
      'tel_1' => request('tel_1'),
      'tel_2' => request('tel_2'),
      'family_status' => request('family_status'),
      'children' => request('children'),
    ]);

    return $personalData;
  }

  public function updateAvatar($employeeId)
  {
    $user = User::find($employeeId);

    if ($user->avatar && file_exists(public_path($user->avatar))) {
      unlink(public_path($user->avatar));
    }

    $file = request()->file('avatar');
    $fileName = uniqid() . '.' . $file->extension();
    $file->move(public_path('img/users'), $fileName);

    $user->avatar = '/img/users/' . $fileName;
    $user->update();

    return $user->avatar;
  }

  public function deleteAvatar($employeeId)
  {
    $user = User::with('job', 'position', 'languages')->find($employeeId);

    if ($user->avatar && file_exists(public_path($user->avatar))) {
      unlink(public_path($user->avatar));

      $user->avatar = null;
      $user->update();
    }

    return $user->avatar;
  }

  public function educations($employeeId)
  {
    return Education::where('user_id', $employeeId)->get();
  }

  public function activities($employeeId)
  {
    return LaborActivity::where('user_id', $employeeId)->get();
  }

  public function storeEducation($employeeId)
  {
    request()->validate([
      'started_at' => 'required',
      'graduated_at' => 'required',
      'institution' => 'required',
      'faculty' => 'required',
      'form' => 'required',
      'speciality' => 'required',
    ]);

    return Education::create([
      'user_id' => $employeeId,
      'started_at' => request('started_at'),
      'graduated_at' => request('graduated_at'),
      'institution' => request('institution'),
      'faculty' => request('faculty'),
      'form' => request('form'),
      'speciality' => request('speciality'),
    ]);
  }

  public function storeActivity($employeeId)
  {
    request()->validate([
      'hired_at' => 'required',
      'dismissed_at' => 'required',
      'organization' => 'required',
      'job' => 'required',
    ]);

    return LaborActivity::create([
      'user_id' => $employeeId,
      'hired_at' => request('hired_at'),
      'dismissed_at' => request('dismissed_at'),
      'organization' => request('organization'),
      'job' => request('job'),
    ]);
  }

  public function crudLanguages($employeeId)
  {
    $user = User::find($employeeId);
    $languages = [];
    foreach (request('languages') as $language) {
      $languages[$language['id']] = ['level' => $language['level']];
    }
    $user->languages()->sync($languages);

    return User::find($employeeId)->languages;
  }
}
