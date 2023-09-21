import { Education, Educations, Employee, PersonalData } from '../types/employees';
import { adaptJobToClient } from './jobs';
import { adaptPositionToClient } from './positions';

export const adaptEmployeeToClient = (employeeUser: {[key: string]: any }): Employee => ({
  id: employeeUser.id,
  name: employeeUser.name,
  surname: employeeUser.surname,
  patronymic: employeeUser.patronymic,
  login: employeeUser.login,
  avatar: employeeUser.avatar,
  startedWorkAt: employeeUser.started_work_at,
  job: employeeUser.job_id ? adaptJobToClient(employeeUser.job) : null,
  position: employeeUser.position_id ? adaptPositionToClient(employeeUser.position) : null,
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

export const adaptEmployeeEducationToClient = (serverEducation: {[key: string]: any }): Education => ({
  id: serverEducation.id,
  userId: serverEducation.user_id,
  startedAt: serverEducation.started_at,
  graduatedAt: serverEducation.graduated_at,
  institution: serverEducation.institution,
  faculty: serverEducation.faculty,
  form: serverEducation.form,
  speciality: serverEducation.speciality,
});

export const adaptEmployeeEducationsToClient = (serverEducations: {[key: string]: any }[]): Educations =>
  serverEducations.map((serverEducation) => adaptEmployeeEducationToClient(serverEducation));
