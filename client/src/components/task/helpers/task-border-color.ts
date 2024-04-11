import { Priority } from '../../task-form/enums/priority.enum';

export type ITaskPriorityType = Priority.high | Priority.normal | Priority.low;

export const getTaskBorderColor = (priority: ITaskPriorityType): string => {
  switch (priority) {
    case Priority.high:
      return 'error.light';
    case Priority.normal:
      return 'grey.900';
    case Priority.low:
      return 'info.light';
  }
};
