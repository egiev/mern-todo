import { Status } from '../../task-form/enums/status.enum';
import { TaskCounterStatusType } from '../interfaces/task-counter.interface';

export const getTaskCounterLabel = (status: TaskCounterStatusType): string => {
  switch (status) {
    case Status.todo:
      return "Todo's";
    case Status.inProgress:
      return 'In Progress';
    case Status.completed:
      return 'Completed';
  }
};
