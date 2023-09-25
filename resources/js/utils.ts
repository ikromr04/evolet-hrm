import dayjs from 'dayjs';

export const getWorkTime = (startedTime: Date): string => {
  const date = dayjs();
  const days = Math.floor(date.diff(startedTime, 'day', true));

  if (days === 1) {
    return '1 день';
  }

  return `${days} дней`;
};
