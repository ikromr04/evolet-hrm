import { Job } from './job';
import { Position } from './position';

export type Employee = {
  id: string;
  name: string;
  surname: string;
  patronymic: string;
  login: string;
  avatar: string;
  startedWorkAt: Date;
  job: Job | null;
  position: Position | null;
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

export type Education = {
  id: string;
  userId: string;
  startedAt: Date;
  graduatedAt: Date;
  institution: string;
  faculty: string;
  form: string;
  speciality: string;
};

export type Educations = Education[];
