import { AuthorizationStatus, SliceName } from '../../const';
import { Employee } from '../../types/employees';
import { State } from '../../types/state';

export const getAuthStatus = (state: State): AuthorizationStatus =>
  state[SliceName.Employee].authorizationStatus;

export const getEmployee = (state: State): Employee | null => state[SliceName.Employee].employee;
