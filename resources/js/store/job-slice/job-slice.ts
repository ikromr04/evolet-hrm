import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { fetchJobs } from './job-api-actions';
import { Jobs } from '../../types/job';

export type JobSlice = {
  jobs: Jobs | null;
};

const initialState: JobSlice = {
  jobs: null,
};

export const jobSlice = createSlice({
  name: SliceName.Job,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.jobs = action.payload;
      });
  },
});
