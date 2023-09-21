import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { Positions } from '../../types/position';
import { fetchPositions } from './position-api-actions';

export type PositionSlice = {
  positions: Positions | null;
};

const initialState: PositionSlice = {
  positions: null,
};

export const positionSlice = createSlice({
  name: SliceName.Job,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPositions.fulfilled, (state, action) => {
        state.positions = action.payload;
      });
  },
});