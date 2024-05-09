import { Status } from '../../task-form/enums/status.enum';
import { ITaskAPI } from '../interfaces/task-api.interface';

export const countTask = (tasks: ITaskAPI[], status: `${Status}`): number => {
  if (!Array.isArray(tasks)) return 0;

  const totalTasks = tasks.filter((task) => task.status === status);

  return totalTasks.length;
};
