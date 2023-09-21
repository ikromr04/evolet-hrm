import { Job } from './job';

export type Employee = {
  id: string;
  name: string;
  surname: string;
  patronymic: string;
  login: string;
  avatar: string;
  startedWorkAt: Date;
  job: Job | null;
  position: string;
};

export type PersonalData = {
  id: string;
  userId: string;
  birthDate: Date;
  gender: string;
  nationality: string;
  citizenship: string;
  address: string;
  email: string;
  tel1: string;
  tel2: string;
  familyStatus: string;
  children: string;
};

