import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './auth-slice/auth-slice';
import { SliceName } from '../const';

export const rootReducer = combineReducers({
  [SliceName.Auth]: authSlice.reducer,
});
