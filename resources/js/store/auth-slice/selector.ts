import { AuthorizationStatus, SliceName } from '../../const';
import { Job } from '../../types/job';
import { PersonalData } from '../../types/personal-data';
import { State } from '../../types/state';

export const getAuthStatus = (state: State): AuthorizationStatus =>
  state[SliceName.Auth].authorizationStatus;

export const getAuthJob = (state: State): Job | null => state[SliceName.Auth].job;

export const getAuthPersonalData = (state: State): PersonalData | null =>
  state[SliceName.Auth].personalData;
