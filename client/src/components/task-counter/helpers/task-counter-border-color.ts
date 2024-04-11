import { Status } from '../../task-form/enums/status.enum';
import { TaskCounterStatusType } from '../interfaces/task-counter.interface';

export const getTaskCounterBorderColor = (
  status: TaskCounterStatusType,
): string => {
  switch (status) {
    case Status.todo:
      return 'error.light';
    case Status.inProgress:
      return 'warning.light';
    case Status.completed:
      return 'success.light';
    default:
      return 'transparent';
  }
};
