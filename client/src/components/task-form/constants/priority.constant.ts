import { Priority } from '../enums/priority.enum';

export const PRIORITY_SELECT_OPTIONS = [
  {
    label: Priority.high,
    value: Priority.high.toUpperCase(),
  },
  {
    label: Priority.normal,
    value: Priority.normal.toUpperCase(),
  },
  {
    label: Priority.low,
    value: Priority.low.toUpperCase(),
  },
];
