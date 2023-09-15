import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosError, AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../../const';
import { LoginData, User } from '../../types/user';
import { Token, dropToken, saveToken } from '../../services/token';
import { redirectToRoute } from '../middlewares/redirect';
import { dropUser, saveUser } from '../../services/user';
import { ValidationError } from '../../types/validation-error';
import { adaptUserToClient } from '../../adapters/users';

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'auth/checkAuth',
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
  'auth/login',
  async ({ body, errorHandler }, { dispatch, extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<{ user: User, token: Token }>(APIRoute.Login, body);
      saveToken(data.token);
      saveUser(adaptUserToClient(data.user));
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
