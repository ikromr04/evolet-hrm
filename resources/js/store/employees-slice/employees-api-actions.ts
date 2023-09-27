import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { dropToken, saveToken } from '../../services/token';
import { generatePath } from 'react-router-dom';
import { ValidationError } from '../../types/validation-error';
import {
  Education,
  EducationId,
  Educations,
  Employee,
  EmployeeLanguages,
  LoginData,
  PersonalData
} from '../../types/employee';
import {
  adaptEmployeeEducationToClient,
  adaptEmployeeEducationsToClient,
  adaptEmployeeLanguages,
  adaptEmployeeToClient,
  adaptPersonalDataToClient
} from '../../adapters/employees';

export const checkAuthorizationAction = createAsyncThunk<Employee, undefined, {
  extra: AxiosInstance;
}>(
  'employees/checkAuthorization',
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoute.Login);
    return adaptEmployeeToClient(data);
  },
);

export const loginAction = createAsyncThunk<Employee, {
  loginData: LoginData,
  errorHandler: (error: ValidationError) => void;
}, {
  extra: AxiosInstance;
  rejectValue: ValidationError;
}>(
  'employees/login',
  async ({ loginData, errorHandler }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post(APIRoute.Login, loginData);
      saveToken(data.token);
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

export const logoutAction = createAsyncThunk<void, undefined, {
  extra: AxiosInstance;
}>(
  'employees/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchEmployeePersonalDataAction = createAsyncThunk<PersonalData, {
  employeeId: string;
}, {
  extra: AxiosInstance;
}>(
  'employees/fetchEmployeePersonalData',
  async ({ employeeId }, { extra: api }) => {
    const { data } = await api.get(generatePath(APIRoute.EmployeePersonalData, { employeeId }));
    return adaptPersonalDataToClient(data);
  },
);

export const updateEmployeeAvatarAction = createAsyncThunk<void, {
  formData: FormData;
  employeeId: string;
  successHandler: (employee: Employee) => void;
 }, {
  extra: AxiosInstance;
}>(
  'employees/updateEmployeeAvatar',
  async ({ formData, employeeId, successHandler }, { extra: api }) => {
    formData.append('_method', 'put');
    const { data } = await api.post(
      generatePath(APIRoute.EmployeeAvatar, { employeeId }), formData
    );
    successHandler(adaptEmployeeToClient(data));
  },
);

export const deleteEmployeeAvatarAction = createAsyncThunk<void, {
  employeeId: string;
  successHandler: (employee: Employee) => void;
 }, {
  extra: AxiosInstance;
}>(
  'employees/deleteEmployeeAvatar',
  async ({ employeeId, successHandler }, { extra: api }) => {
    const { data } = await api.delete(generatePath(APIRoute.EmployeeAvatar, { employeeId }));
    successHandler(adaptEmployeeToClient(data));
  },
);

export const fetchEmployeeByIdAction = createAsyncThunk<Employee, {
  employeeId: string;
}, {
  extra: AxiosInstance;
}>(
  'employees/fetchEmployeeById',
  async ({ employeeId }, { extra: api }) => {
    const { data } = await api.get(generatePath(APIRoute.Employee, { employeeId }));
    return adaptEmployeeToClient(data);
  },
);

export const updateEmployeeAction = createAsyncThunk<Employee, {
  formData: FormData;
  employeeId: string;
  errorHandler: (error: ValidationError) => void;
  successHandler: () => void;
}, {
  extra: AxiosInstance;
  rejectValue: ValidationError;
}>(
  'employees/updateEmployee',
  async (arg, { extra: api, rejectWithValue }) => {
    const { formData, employeeId, errorHandler, successHandler } = arg;
    try {
      formData.append('_method', 'put');
      const { data } = await api.post(generatePath(APIRoute.Employee, { employeeId }), formData);
      successHandler();
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
  formData: FormData;
  employeeId: string;
  errorHandler: (error: ValidationError) => void;
  successHandler: () => void;
}, {
  extra: AxiosInstance;
  rejectValue: ValidationError;
}>(
  'employees/updateEmployeePersonalData',
  async (arg, { extra: api, rejectWithValue }) => {
    const { formData, employeeId, errorHandler, successHandler } = arg;
    try {
      formData.append('_method', 'put');
      const { data } = await api.post(
        generatePath(APIRoute.EmployeePersonalData, { employeeId }), formData
      );
      successHandler();
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

export const fetchEmployeeEducationsAction = createAsyncThunk<Educations, {
  employeeId: string;
}, {
  extra: AxiosInstance;
}>(
  'employees/fetchEmployeeEducations',
  async ({ employeeId }, { extra: api }) => {
    const { data } = await api.get(generatePath(APIRoute.EmployeeEducations, { employeeId }));
    return adaptEmployeeEducationsToClient(data);
  },
);

export const updateEmployeeEducationAction = createAsyncThunk<Education, {
  formData: FormData;
  educationId: string;
  errorHandler: (error: ValidationError) => void;
  successHandler: () => void;
}, {
  extra: AxiosInstance;
  rejectValue: ValidationError;
}>(
  'employees/updateEducation',
  async (arg, { extra: api, rejectWithValue }) => {
    const { formData, educationId, errorHandler, successHandler } = arg;
    try {
      formData.append('_method', 'put');
      const { data } = await api.post(
        generatePath(APIRoute.Educations, { educationId }), formData
      );
      successHandler();
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
  formData: FormData;
  employeeId: string;
  errorHandler: (error: ValidationError) => void;
  successHandler: () => void;
}, {
  extra: AxiosInstance;
  rejectValue: ValidationError;
}>(
  'employees/storeEmployeeEducation',
  async (arg, { extra: api, rejectWithValue }) => {
    const { formData, employeeId, errorHandler, successHandler } = arg;
    try {
      const { data } = await api.post(
        generatePath(APIRoute.EmployeeEducations, { employeeId }), formData
      );
      successHandler();
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

export const deleteEmployeeEducationAction = createAsyncThunk<EducationId, {
  educationId: string;
  successHandler: () => void;
}, {
  extra: AxiosInstance;
}>(
  'employees/deleteEmployeeEducation',
  async ({ educationId, successHandler }, { extra: api }) => {
    await api.delete(generatePath(APIRoute.Educations, { educationId }));
    successHandler();
    return educationId;
  },
);

export const crudEmployeeLanguagesAction = createAsyncThunk<EmployeeLanguages | null, {
  employeeId: string;
  employeeLanguages: EmployeeLanguages | null;
  successHandler: () => void;
}, {
  extra: AxiosInstance;
}>(
  'employees/crudEmployeeLanguages',
  async ({ employeeId, employeeLanguages, successHandler }, { extra: api }) => {
    const { data } = await api.post(
      generatePath(APIRoute.EmployeeLanguages, { employeeId }), { languages: employeeLanguages }
    );
    successHandler();
    if (!data) {
      return null;
    }
    return adaptEmployeeLanguages(data);
  },
);

export const fetchNextEmployeeIdAction = createAsyncThunk<void, {
  employeeId: string;
  successHandler: (nextEmployeeId: string) => void;
}, {
  extra: AxiosInstance;
}>(
  'employees/fetchNextEmployeeId',
  async ({ employeeId, successHandler }, { extra: api }) => {
    const { data } = await api.get(generatePath(APIRoute.EmployeeNext, { employeeId }));
    successHandler(data);
  },
);

export const fetchPreviousEmployeeIdAction = createAsyncThunk<void, {
  employeeId: string;
  successHandler: (previousEmployeeId: string) => void;
}, {
  extra: AxiosInstance;
}>(
  'employees/previous',
  async ({ employeeId, successHandler }, { extra: api }) => {
    const { data } = await api.get(generatePath(APIRoute.EmployeePrevious, { employeeId }));
    successHandler(data);
  },
);
