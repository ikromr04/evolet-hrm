export enum AppRoute {
  Main = '/',
  Login = '/users/login',
  Profile = '/users/profile',
  Account = '/users/account',
  Employees = '/employees',
  Calendars = '/calendars',

  Vacancies = '/recruitment/vacancies',
  Applicants = '/recruitment/applicants',
  Hiring = '/recruitment/hiring',
  Tests = '/recruitment/tests',

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
