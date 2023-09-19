import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, SliceName } from '../../const';
import { checkAuthAction, fetchEmployeeById, loginAction, logoutAction } from './employees-api-actions';
import { Employee } from '../../types/employees';

export type EmployeesSlice = {
  authorizationStatus: AuthorizationStatus;
  authEmployee: Employee | null;
  employee: Employee | null;
};

const initialState: EmployeesSlice = {
  authorizationStatus: AuthorizationStatus.Unknown,
  authEmployee: null,
  employee: null,
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
      });
  },
});

export const { setEmployee, setAuthEmployee } = employeeSlice.actions;
