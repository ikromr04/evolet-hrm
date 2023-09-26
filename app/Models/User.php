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
    return $this->hasMany(Education::class);
  }

  public function job()
  {
    return $this->belongsTo(Job::class);
  }

  public function position()
  {
    return $this->belongsTo(Position::class);
  }

  public function languages()
  {
    return $this->belongsToMany(Language::class)->withPivot('level');
  }
}
