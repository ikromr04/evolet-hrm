import { combineReducers } from '@reduxjs/toolkit';
import { employeeSlice } from './employees-slice/employees-slice';
import { SliceName } from '../const';

export const rootReducer = combineReducers({
  [SliceName.Employee]: employeeSlice.reducer,
});
