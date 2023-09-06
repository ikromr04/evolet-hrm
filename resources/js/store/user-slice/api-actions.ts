import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../../const';
import { LoginData, User } from '../../types/user';
import { Token, dropToken, saveToken } from '../../services/token';
import { redirectToRoute } from '../middlewares/redirect';
import { dropUser, saveUser } from '../../services/user';

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'users/checkAuth',
  async (_arg, { extra: api }) => await api.get(APIRoute.Login),
);

export const loginAction = createAsyncThunk<void, LoginData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'users/login',
  async (loginData, { dispatch, extra: api }) => {
    const { data } = await api.post<{ user: User, token: Token }>(APIRoute.Login, loginData);
    saveToken(data.token);
    saveUser(data.user);
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'users/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dropUser();
  },
);
