export enum AppRoute {
  Main = '/',
  Login = '/auth/login',
  Profile = '/auth/profile',
  Account = '/auth/account',
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
  Login = '/auth/login',
  Logout = '/auth/logout',
  AuthJob = '/auth/job',
}

export enum SliceName {
  Auth = 'AUTH',
}
