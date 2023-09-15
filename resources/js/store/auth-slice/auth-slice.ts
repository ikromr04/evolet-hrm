import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, SliceName } from '../../const';
import { checkAuthAction, fetchAuthJob, fetchAuthPersonalData, loginAction, logoutAction } from './api-actions';
import { Job } from '../../types/job';
import { PersonalData } from '../../types/personal-data';

export type AuthSlice = {
  authorizationStatus: AuthorizationStatus;
  job: Job | null;
  personalData: PersonalData | null;
};

const initialState: AuthSlice = {
  authorizationStatus: AuthorizationStatus.Unknown,
  job: null,
  personalData: null,
};

export const authSlice = createSlice({
  name: SliceName.Auth,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchAuthJob.fulfilled, (state, action) => {
        state.job = action.payload;
      })
      .addCase(fetchAuthPersonalData.fulfilled, (state, action) => {
        state.personalData = action.payload;
      });
  },
});
