import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, SliceName } from '../../const';
import { checkAuthAction, fetchAuthPersonalData, loginAction, logoutAction } from './api-actions';
import { PersonalData } from '../../types/personal-data';

export type AuthSlice = {
  authorizationStatus: AuthorizationStatus;
  personalData: PersonalData | null;
};

const initialState: AuthSlice = {
  authorizationStatus: AuthorizationStatus.Unknown,
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
      .addCase(fetchAuthPersonalData.fulfilled, (state, action) => {
        state.personalData = action.payload;
      });
  },
});
