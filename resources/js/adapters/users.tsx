import { User } from '../types/user';

export const adaptUserToClient = (serverUser: {[key: string]: any }): User => ({
  id: serverUser.id,
  name: serverUser.name,
  surname: serverUser.surname,
  patronymic: serverUser.patronymic,
  email: serverUser.email,
  avatar: serverUser.avatar,
  birthDate: serverUser.birth_date,
});
