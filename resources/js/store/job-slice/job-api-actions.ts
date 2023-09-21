import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { Jobs } from '../../types/job';
import { adaptJobsToClient } from '../../adapters/jobs';

export const fetchJobs = createAsyncThunk<Jobs, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'jobs/fetchJobs',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Jobs>(APIRoute.Jobs);
    return adaptJobsToClient(data);
  },
);
