export type LoginData = {
  login: string;
  password: string;
};

export type User = {
  id: string;
  name: string;
  surname: string;
  patronymic: string;
  login: string;
  avatar: string;
  startedWordAt: Date;
};
