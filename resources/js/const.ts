export enum AppRoute {
  Main = '/',
  Login = '/employees/login',
  Employees = '/employees',
  Employee = '/employees/:employeeId',
  EmployeeWork = '/employees/:employeeId/work',
  EmployeeAbsence = '/employees/:employeeId/absence',
  EmployeeEfficiency = '/employees/:employeeId/efficiency',
  EmployeeDocuments = '/employees/:employeeId/documents',
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
  EmployeeJob = '/employees/job',
  EmployeePersonalData = '/employees/:employeeId/personal',
  EmployeeAvatar = '/employees/:employeeId/avatar',
}

export enum SliceName {
  Employee = 'Employee',
}
