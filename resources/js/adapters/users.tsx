import { User } from '../types/user';

export const adaptUserToClient = (serverUser: {[key: string]: string}): User => ({
  id: serverUser.id,
  name: serverUser.name,
  surname: serverUser.surname,
  patronymic: serverUser.patronymic,
  avatar: serverUser.avatar,
  email: serverUser.email,
});
