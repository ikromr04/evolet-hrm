import { Education, Educations, Employee, EmployeeLanguage, EmployeeLanguages, PersonalData } from '../types/employees';
import { adaptJobToClient } from './jobs';
import { adaptPositionToClient } from './positions';

export const adaptEmployeeToClient = (serverEmployee: {[key: string]: any }): Employee => ({
  id: serverEmployee.id,
  name: serverEmployee.name,
  surname: serverEmployee.surname,
  patronymic: serverEmployee.patronymic,
  login: serverEmployee.login,
  avatar: serverEmployee.avatar,
  startedWorkAt: serverEmployee.started_work_at,
  job: serverEmployee.job_id ? adaptJobToClient(serverEmployee.job) : null,
  position: serverEmployee.position_id ? adaptPositionToClient(serverEmployee.position) : null,
  languages: serverEmployee.languages && adaptEmployeeLanguages(serverEmployee.languages)
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

export const adaptEmployeeLanguage = (serverLanguage: {[key: string]: any }): EmployeeLanguage => ({
  id: serverLanguage.id,
  name: serverLanguage.name,
  level: serverLanguage.pivot.level,
});

export const adaptEmployeeLanguages = (serverLanguages: {[key: string]: any }[]): EmployeeLanguages | null => {
  if (!serverLanguages.length) {
    return null;
  }
  return serverLanguages.map((serverLanguage) => adaptEmployeeLanguage(serverLanguage));
}
