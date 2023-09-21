import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { Positions } from '../../types/position';
import { adaptPositionsToClient } from '../../adapters/positions';

export const fetchPositions = createAsyncThunk<Positions, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'positions/fetchPositions',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Positions>(APIRoute.Positions);
    return adaptPositionsToClient(data);
  },
);
