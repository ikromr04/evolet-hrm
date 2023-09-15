import { AuthorizationStatus, SliceName } from '../../const';
import { PersonalData } from '../../types/personal-data';
import { State } from '../../types/state';

export const getAuthStatus = (state: State): AuthorizationStatus =>
  state[SliceName.Auth].authorizationStatus;

export const getAuthPersonalData = (state: State): PersonalData | null =>
  state[SliceName.Auth].personalData;
