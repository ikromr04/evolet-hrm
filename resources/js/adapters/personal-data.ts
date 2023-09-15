import { PersonalData } from '../types/personal-data';

export const adaptPersonalDataToClient = (serverData: {[key: string]: any }): PersonalData => ({
  id: serverData.id,
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
