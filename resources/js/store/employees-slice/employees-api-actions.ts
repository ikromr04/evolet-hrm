import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosError, AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { Education, Educations, Employee, EmployeeLanguages, PersonalData } from '../../types/employees';
import { Token, dropToken, saveToken } from '../../services/token';
import { ValidationError } from '../../types/validation-error';
import { LoginData } from '../../types/auth';
import { adaptEmployeeEducationToClient, adaptEmployeeEducationsToClient, adaptEmployeeLanguages, adaptEmployeeToClient, adaptPersonalDataToClient } from '../../adapters/employees';
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
      const { data } = await api.post(APIRoute.Login, body);
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
    const { data } = await api.get(generatePath(APIRoute.EmployeePersonalData, { employeeId }));
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
    const { data } = await api.delete(generatePath(APIRoute.EmployeeAvatar, { employeeId }));
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
    const { data } = await api.get(generatePath(APIRoute.Employee, { employeeId }));
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
      const { data } = await api.post(generatePath(APIRoute.Employee, { employeeId }), form);
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
      const { data } = await api.post(generatePath(APIRoute.EmployeePersonalData, { employeeId }), form);
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
    const { data } = await api.get(generatePath(APIRoute.EmployeeEducations, { employeeId }));
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
      const { data } = await api.post(generatePath(APIRoute.Educations, { educationId }), form);
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

export const storeEmployeeEducationAction = createAsyncThunk<Education, {
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
  'employees/storeEducation',
  async ({ form, employeeId, errorHandler, onSuccess }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post(generatePath(APIRoute.EmployeeEducations, { employeeId }), form);
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

export const deleteEmployeeEducationAction = createAsyncThunk<string, {
  educationId: string;
  onSuccess?: () => void;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'employees/deleteEducation',
  async ({ educationId, onSuccess }, { extra: api }) => {
    await api.delete(generatePath(APIRoute.Educations, { educationId }));
    onSuccess && onSuccess();
    return educationId;
  },
);

export const createOrUpdateEmployeeLanguagesAction = createAsyncThunk<EmployeeLanguages | null, {
  employeeId: string;
  languages: EmployeeLanguages | null;
  onSuccess?: () => void;
}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'employees/createOrUpdateEmployeeLanguages',
  async ({ employeeId, languages, onSuccess }, { extra: api }) => {
    const { data } = await api.post(generatePath(APIRoute.EmployeeLanguages, { employeeId }), { languages });
    onSuccess && onSuccess();
    if (!data) {
      return null;
    }
    return adaptEmployeeLanguages(data);
  },
);

