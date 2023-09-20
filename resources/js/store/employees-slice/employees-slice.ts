import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, SliceName } from '../../const';
import { checkAuthAction, fetchEmployeeById, fetchEmployeePersonalData, loginAction, logoutAction, updateEmployeeAction } from './employees-api-actions';
import { Employee, PersonalData } from '../../types/employees';

export type EmployeesSlice = {
  authorizationStatus: AuthorizationStatus;
  authEmployee: Employee | null;
  employee: Employee | null;
  employeePersonalData: PersonalData | null;
};

const initialState: EmployeesSlice = {
  authorizationStatus: AuthorizationStatus.Unknown,
  authEmployee: null,
  employee: null,
  employeePersonalData: null,
};

export const employeeSlice = createSlice({
  name: SliceName.Employee,
  initialState,
  reducers: {
    setEmployee: (state, action) => {
      state.employee = action.payload;
    },
    setAuthEmployee: (state, action) => {
      state.authEmployee = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.authEmployee = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.authEmployee = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchEmployeeById.fulfilled, (state, action) => {
        state.employee = action.payload;
      })
      .addCase(fetchEmployeePersonalData.fulfilled, (state, action) => {
        state.employeePersonalData = action.payload;
      })
      .addCase(updateEmployeeAction.fulfilled, (state, action) => {
        state.employee = action.payload;
        if (action.payload.id === state.authEmployee?.id) {
          state.authEmployee = action.payload;
        }
      });
  },
});

export const { setEmployee, setAuthEmployee } = employeeSlice.actions;
