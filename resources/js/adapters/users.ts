import { User } from '../types/user';

export const adaptUserToClient = (serverUser: {[key: string]: any }): User => ({
  id: serverUser.id,
  name: serverUser.name,
  surname: serverUser.surname,
  patronymic: serverUser.patronymic,
  login: serverUser.login,
  avatar: serverUser.avatar,
  startedWordAt: serverUser.started_word_at,
  job: serverUser.job.title,
  position: serverUser.position.title,
});
