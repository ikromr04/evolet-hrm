export enum AppRoute {
  Main = '/',
  Login = '/employees/login',

  Employee = '/employees/:employeeId',
  EmployeeWork = '/employees/:employeeId/work',

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
  Login = '/employees/login',
  Logout = '/employees/logout',
  Employee = '/employees/:employeeId',
  EmployeeJob = '/employees/:employeeId/job',
  EmployeeAvatar = '/employees/:employeeId/avatar',
  EmployeePersonalData = '/employees/:employeeId/personal',
  EmployeeEducations = '/employees/:employeeId/educations',

  Educations = '/educations/:educationId',

  Jobs = '/jobs',

  Positions = '/positions',
}

export enum SliceName {
  Employee = 'Employee',
  Job = 'Job',
  Position = 'Position',
};
