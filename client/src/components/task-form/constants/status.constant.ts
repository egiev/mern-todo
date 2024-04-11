import { Status } from '../enums/status.enum';

export const STATUS_SELECT_OPTIONS = [
  {
    label: Status.todo,
    value: Status.todo.toUpperCase(),
  },
  {
    label: Status.inProgress,
    value: Status.inProgress.toUpperCase(),
  },
];
