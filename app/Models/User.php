<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;

  protected $guarded = [];
  protected $hidden = ['password', 'remember_token'];
  protected $casts = ['email_verified_at' => 'datetime'];

  public function personalData()
  {
    return $this->hasOne(PersonalData::class);
  }

  public function educations()
  {
    return $this->hasMany(Education::class)->orderBy('started_at', 'desc');
  }

  public function activities()
  {
    return $this->hasMany(LaborActivity::class)->orderBy('hired_at', 'desc');
  }

  public function jobs()
  {
    return $this->belongsToMany(Job::class);
  }

  public function positions()
  {
    return $this->belongsToMany(Position::class);
  }

  public function languages()
  {
    return $this->belongsToMany(Language::class)->withPivot('level');
  }
}
