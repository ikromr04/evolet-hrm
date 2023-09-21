import { Employee, PersonalData } from '../types/employees';
import { adaptJobToClient } from './jobs';

export const adaptEmployeeToClient = (serverUser: {[key: string]: any }): Employee => ({
  id: serverUser.id,
  name: serverUser.name,
  surname: serverUser.surname,
  patronymic: serverUser.patronymic,
  login: serverUser.login,
  avatar: serverUser.avatar,
  startedWorkAt: serverUser.started_work_at,
  job: serverUser.job_id ? adaptJobToClient(serverUser.job) : null,
  position: serverUser.position.title,
});

export const adaptPersonalDataToClient = (serverData: {[key: string]: any }): PersonalData => ({
  id: serverData.id,
  userId: serverData.user_id,
  birthDate: serverData.birth_date,
  gender: serverData.gender,
  nationality: serverData.nationality,
  citizenship: serverData.citizenship,
  address: serverData.address,
  email: serverData.email,
  tel1: serverData.tel_1,
  tel2: serverData.tel_2,
  familyStatus: serverData.family_status,
  children: serverData.children,
});
