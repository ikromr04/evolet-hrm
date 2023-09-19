import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosError, AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../../const';
import { Employee, PersonalData } from '../../types/employees';
import { Token, dropToken, saveToken } from '../../services/token';
import { redirectToRoute } from '../middlewares/redirect';
import { dropUser, saveUser } from '../../services/user';
import { ValidationError } from '../../types/validation-error';
import { LoginData } from '../../types/auth';
import { adaptEmployeeToClient, adaptPersonalDataToClient } from '../../adapters/employees';
import { generatePath } from 'react-router-dom';

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'employees/checkAuth',
  async (_arg, { extra: api }) => await api.get(APIRoute.Login),
);

export const loginAction = createAsyncThunk<void, {
  body: LoginData,
  errorHandler: (error: ValidationError) => void;
}, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
  rejectValue: ValidationError,
}>(
  'employees/login',
  async ({ body, errorHandler }, { dispatch, extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<{ employee: Employee, token: Token }>(APIRoute.Login, body);
      saveToken(data.token);
      saveUser(adaptEmployeeToClient(data.employee));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch (err: any) {
      let error: AxiosError<ValidationError> = err;
      if (!error.response) {
        throw err;
      }
      errorHandler(error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'auth/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dropUser();
  },
);

export const fetchEmployeePersonalData = createAsyncThunk<PersonalData, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'auth/fetchEmployeePersonalData',
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoute.EmployeePersonalData);
    return adaptPersonalDataToClient(data.personal_data);
  },
);

export const updateEmployeeAvatar = createAsyncThunk<void, FormData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'auth/updateEmployeeAvatar',
  async (formData, { extra: api }) => {
    formData.append('_method', 'put');
    const { data } = await api.post(APIRoute.EmployeeAvatar, formData);
    return saveUser(data.user);
  },
);

export const fetchEmployeeById = createAsyncThunk<Employee, { employeeId: string }, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'auth/fetchEmployeeById',
  async ({ employeeId }, { extra: api }) => {
    const { data } = await api.get<Employee>(generatePath(APIRoute.Employee, { employeeId }));
    return adaptEmployeeToClient(data);
  },
);
