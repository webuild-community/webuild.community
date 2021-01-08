import dayjs from 'dayjs';

export type DateFormat = 'MMM DD, YYYY' | 'dddd DD, YYYY';

export function formatDatetime(value: string, format: DateFormat) {
  return dayjs(value).format(format);
}
