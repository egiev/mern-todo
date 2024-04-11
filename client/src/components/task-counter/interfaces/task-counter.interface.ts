import { Status } from '../../task-form/enums/status.enum';

export type TaskCounterStatusType =
  | Status.todo
  | Status.inProgress
  | Status.completed;

export interface ITaskCounter {
  count?: number;
  status?: TaskCounterStatusType;
}
