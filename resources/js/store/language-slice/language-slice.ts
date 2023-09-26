import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { fetchLanguages } from './language-api-actions';
import { Languages } from '../../types/language';

export type LanguageSlice = {
  languages: Languages | null;
};

const initialState: LanguageSlice = {
  languages: null,
};

export const languageSlice = createSlice({
  name: SliceName.Language,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLanguages.fulfilled, (state, action) => {
        state.languages = action.payload;
      });
  },
});
