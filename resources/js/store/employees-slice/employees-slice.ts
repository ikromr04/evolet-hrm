import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, SliceName } from '../../const';
import { Educations, Employee, PersonalData } from '../../types/employees';
import {
  checkAuthAction,
  createOrUpdateEmployeeLanguagesAction,
  deleteEmployeeEducationAction,
  fetchEmployeeById,
  fetchEmployeeEducations,
  fetchEmployeePersonalData,
  loginAction,
  logoutAction,
  storeEmployeeEducationAction,
  updateEmployeeAction,
  updateEmployeeEducationAction,
  updateEmployeePersonalDataAction
} from './employees-api-actions';

export type EmployeesSlice = {
  authorizationStatus: AuthorizationStatus;
  authEmployee: Employee | null;
  employee: Employee | null;
  employeePersonalData: PersonalData | null;
  educations: Educations | null;
};

const initialState: EmployeesSlice = {
  authorizationStatus: AuthorizationStatus.Unknown,
  authEmployee: null,
  employee: null,
  employeePersonalData: null,
  educations: null,
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
      })
      .addCase(updateEmployeePersonalDataAction.fulfilled, (state, action) => {
        state.employeePersonalData = action.payload;
      })
      .addCase(fetchEmployeeEducations.fulfilled, (state, action) => {
        state.educations = action.payload;
      })
      .addCase(updateEmployeeEducationAction.fulfilled, (state, action) => {
        const updatedEducation = action.payload;
        if (state.educations) {
          state.educations = state.educations.map((education) =>
            (education.id === updatedEducation.id) ? updatedEducation : education
          );
        } else {
          state.educations = [updatedEducation];
        }
      })
      .addCase(storeEmployeeEducationAction.fulfilled, (state, action) => {
        const educations = state.educations || [];
        state.educations = [...educations, action.payload];
      })
      .addCase(deleteEmployeeEducationAction.fulfilled, (state, action) => {
        const educations = state.educations || [];
        state.educations = educations.filter(({ id }) => id !== action.payload);
      })
      .addCase(createOrUpdateEmployeeLanguagesAction.fulfilled, (state, action) => {
        const employee = state.employee && {
          ...state.employee,
          languages: action.payload,
        };
        state.employee = employee;
      });
  },
});

export const { setEmployee, setAuthEmployee } = employeeSlice.actions;
