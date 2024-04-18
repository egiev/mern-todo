import { Status } from '../enums/status.enum';

export const STATUS_SELECT_OPTIONS = [
  {
    label: Status.todo.toUpperCase(),
    value: Status.todo,
  },
  {
    label: Status.inProgress.toUpperCase(),
    value: Status.inProgress,
  },
];
