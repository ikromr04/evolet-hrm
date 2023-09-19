export enum AppRoute {
  Main = '/',
  Login = '/auth/login',
  Profile = '/auth/profile',
  ProfilePersonal = '/auth/profile/personal',
  ProfileWork = '/auth/profile/work',
  ProfileAbsence = '/auth/profile/absence',
  ProfileEfficiency = '/auth/profile/efficiency',
  ProfileDocuments = '/auth/profile/documents',
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
  AuthPersonalData = '/auth/personal-data',
  AuthAvatar = '/auth/avatar',
}

export enum SliceName {
  Auth = 'AUTH',
}
