import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './user-slice/user-slice';
import { SliceName } from '../const';

export const rootReducer = combineReducers({
  [SliceName.User]: userSlice.reducer,
});
