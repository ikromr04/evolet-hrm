import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosError, AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { Education, Educations, Employee, PersonalData } from '../../types/employees';
import { Token, dropToken, saveToken } from '../../services/token';
import { ValidationError } from '../../types/validation-error';
import { LoginData } from '../../types/auth';
import { adaptEmployeeEducationToClient, adaptEmployeeEducationsToClient, adaptEmployeeToClient, adaptPersonalDataToClient } from '../../adapters/employees';
import { generatePath } from 'react-router-dom';

export const checkAuthAction = createAsyncThunk<Employee, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'employees/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoute.Login);
    return adaptEmployeeToClient(data.employee);
  },
);

export const loginAction = createAsyncThunk<Employee, {
  body: LoginData;
  errorHandler: (error: ValidationError) => void;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: ValidationError;
}>(
  'employees/login',
  async ({ body, errorHandler }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<{ employee: Employee, token: Token }>(APIRoute.Login, body);
      saveToken(data.token);
      return adaptEmployeeToClient(data.employee);
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
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'auth/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchEmployeePersonalData = createAsyncThunk<PersonalData, {
  employeeId: string;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'employees/fetchEmployeePersonalData',
  async ({ employeeId }, { extra: api }) => {
    const { data } = await api.get<PersonalData>(generatePath(APIRoute.EmployeePersonalData, { employeeId }));
    return adaptPersonalDataToClient(data);
  },
);

export const updateEmployeeAvatar = createAsyncThunk<void, {
  form: FormData;
  employeeId: string;
  onSuccess: (employee: Employee) => void;
 }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'employees/updateEmployeeAvatar',
  async ({ form, employeeId, onSuccess }, { extra: api }) => {
    form.append('_method', 'put');
    const { data } = await api.post(generatePath(APIRoute.EmployeeAvatar, { employeeId }), form);
    onSuccess(adaptEmployeeToClient(data));
  },
);

export const deleteEmployeeAvatar = createAsyncThunk<void, {
  employeeId: string;
  onSuccess: (employee: Employee) => void;
 }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'employees/deleteEmployeeAvatar',
  async ({ employeeId, onSuccess }, { extra: api }) => {
    const { data } = await api.delete<Employee>(generatePath(APIRoute.EmployeeAvatar, { employeeId }));
    onSuccess(adaptEmployeeToClient(data));
  },
);

export const fetchEmployeeById = createAsyncThunk<Employee, {
  employeeId: string;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'employees/fetchEmployeeById',
  async ({ employeeId }, { extra: api }) => {
    const { data } = await api.get<Employee>(generatePath(APIRoute.Employee, { employeeId }));
    return adaptEmployeeToClient(data);
  },
);

export const updateEmployeeAction = createAsyncThunk<Employee, {
  form: FormData;
  employeeId: string;
  errorHandler: (error: ValidationError) => void;
  onSuccess?: () => void;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: ValidationError;
}>(
  'employees/update',
  async ({ form, employeeId, errorHandler, onSuccess }, { extra: api, rejectWithValue }) => {
    try {
      form.append('_method', 'put');
      const { data } = await api.post<Employee>(generatePath(APIRoute.Employee, { employeeId }), form);
      onSuccess && onSuccess();
      return adaptEmployeeToClient(data);
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

export const updateEmployeePersonalDataAction = createAsyncThunk<PersonalData, {
  form: FormData;
  employeeId: string;
  errorHandler: (error: ValidationError) => void;
  onSuccess?: () => void;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: ValidationError;
}>(
  'employees/updatePersonalData',
  async ({ form, employeeId, errorHandler, onSuccess }, { extra: api, rejectWithValue }) => {
    try {
      form.append('_method', 'put');
      const { data } = await api.post<PersonalData>(generatePath(APIRoute.EmployeePersonalData, { employeeId }), form);
      onSuccess && onSuccess();
      return adaptPersonalDataToClient(data);
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

export const fetchEmployeeEducations = createAsyncThunk<Educations, {
  employeeId: string;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'employees/fetchEmployeeEducations',
  async ({ employeeId }, { extra: api }) => {
    const { data } = await api.get<Educations>(generatePath(APIRoute.EmployeeEducations, { employeeId }));
    return adaptEmployeeEducationsToClient(data);
  },
);

export const updateEmployeeEducationAction = createAsyncThunk<Education, {
  form: FormData;
  educationId: string;
  errorHandler: (error: ValidationError) => void;
  onSuccess?: () => void;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: ValidationError;
}>(
  'employees/updateEducation',
  async ({ form, educationId, errorHandler, onSuccess }, { extra: api, rejectWithValue }) => {
    try {
      form.append('_method', 'put');
      const { data } = await api.post<Education>(generatePath(APIRoute.Educations, { educationId }), form);
      onSuccess && onSuccess();
      return adaptEmployeeEducationToClient(data);
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
