import dayjs from 'dayjs';

export type DateFormat = 'MMM DD, YYYY' | 'dddd DD, YYYY' | 'hh:mm a';

export function formatDatetime(value: string, format: DateFormat) {
  if (!dayjs(value).isValid()) {
    return '---';
  }

  return dayjs(value).format(format);
}
