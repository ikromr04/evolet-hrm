import { User } from '../types/employees';

const USER_KEY_NAME = 'user-data';

export const getUser = (): User | null => {
  const data = localStorage.getItem(USER_KEY_NAME);

  return data
    ? JSON.parse(data)
    : null;
};

export const saveUser = (user: User): void =>
  localStorage.setItem(USER_KEY_NAME, JSON.stringify(user));

export const dropUser = (): void =>
  localStorage.removeItem(USER_KEY_NAME);

