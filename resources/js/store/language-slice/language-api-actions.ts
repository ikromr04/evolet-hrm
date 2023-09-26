import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { Languages } from '../../types/language';
import { adaptLanguagesToClient } from '../../adapters/languages';

export const fetchLanguages = createAsyncThunk<Languages, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'languages/fetchLanguages',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Languages>(APIRoute.Languages);

    return adaptLanguagesToClient(data);
  },
);
