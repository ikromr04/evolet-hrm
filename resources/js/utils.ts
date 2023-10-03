import dayjs from 'dayjs';

export const getWorkTime = (startedTime: Date): string => {
  const date = dayjs();
  const days = Math.floor(date.diff(startedTime, 'day', true));

  if (days === 1) {
    return '1 день';
  }

  return `${days} дней`;
};

export const debounce = <F extends (...args: any) => any>(
  func: F,
  waitFor = 500,
) => {
  let timeout: ReturnType<typeof setTimeout> | number = 0;

  const debounced = (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
  }

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};
