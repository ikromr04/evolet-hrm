export enum AppRoute {
  Main = '/',
  Login = '/users/login',
  Register = '/users/register',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Login = '/users/login',
  Logout = '/users/logout',
}

export enum SliceName {
  User = 'USER',
}
