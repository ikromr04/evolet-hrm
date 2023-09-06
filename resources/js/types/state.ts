import { AuthorizationStatus } from './../const';
import { store } from '../store';

export type UserSlice = {
  authorizationStatus: AuthorizationStatus;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
