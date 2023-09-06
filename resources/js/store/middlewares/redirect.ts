import { rootReducer } from './../root-reducer';
import browserHistory from '../../browser-history';
import { Middleware } from 'redux';
import { createAction } from '@reduxjs/toolkit';

type Reducer = ReturnType<typeof rootReducer>;

export const redirectToRoute = createAction<string>('app/redirectToRoute');

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === 'app/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
