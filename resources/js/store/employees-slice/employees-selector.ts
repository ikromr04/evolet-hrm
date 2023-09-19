import { AuthorizationStatus, SliceName } from '../../const';
import { Employee, PersonalData } from '../../types/employees';
import { State } from '../../types/state';

export const getAuthStatus = (state: State): AuthorizationStatus => state[SliceName.Employee].authorizationStatus;
export const getEmployee = (state: State): Employee | null => state[SliceName.Employee].employee;
export const getAuthEmployee = (state: State): Employee | null => state[SliceName.Employee].authEmployee;
export const getEmployeePersonalData = (state: State): PersonalData | null => state[SliceName.Employee].employeePersonalData;
