import { combineReducers } from '@reduxjs/toolkit';
import { employeeSlice } from './employees-slice/employees-slice';
import { SliceName } from '../const';
import { jobSlice } from './job-slice/job-slice';

export const rootReducer = combineReducers({
  [SliceName.Employee]: employeeSlice.reducer,
  [SliceName.Job]: jobSlice.reducer,
});
