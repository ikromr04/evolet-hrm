export const EMPTY_OPTION_LABEL = '--Выберите--';
export const DEFAULT_AVATAR_PATH = '/img/default-avatar.png';

export enum AppRoute {
  Main = '/',
  Login = '/employees/login',
  Employees = '/employees',
  Employee = '/employees/:employeeId',
  EmployeeWork = '/employees/:employeeId/work',
  NotFound = '*',
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
};

export enum APIRoute {
  Login = '/employees/login',
  Logout = '/employees/logout',
  Employee = '/employees/:employeeId',
  EmployeeJob = '/employees/:employeeId/job',
  EmployeeAvatar = '/employees/:employeeId/avatar',
  EmployeePersonalData = '/employees/:employeeId/personal',
  EmployeeEducations = '/employees/:employeeId/educations',
  EmployeeLanguages = '/employees/:employeeId/languages',
  Educations = '/educations/:educationId',
  Jobs = '/jobs',
  Positions = '/positions',
  Languages = '/languages',
};

export enum SliceName {
  App = 'App',
  Employee = 'Employee',
  Job = 'Job',
  Position = 'Position',
  Language = 'Language',
};
