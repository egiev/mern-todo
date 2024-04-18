import { Priority } from '../enums/priority.enum';

export const PRIORITY_SELECT_OPTIONS = [
  {
    label: Priority.high.toUpperCase(),
    value: Priority.high,
  },
  {
    label: Priority.normal.toUpperCase(),
    value: Priority.normal,
  },
  {
    label: Priority.low.toUpperCase(),
    value: Priority.low,
  },
];
