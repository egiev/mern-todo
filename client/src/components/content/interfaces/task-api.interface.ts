import { Priority } from '../../task-form/enums/priority.enum';
import { Status } from '../../task-form/enums/status.enum';

export interface ITaskAPI {
  id: string;
  title: string;
  description: string;
  date: string;
  status: `${Status}`;
  priority: `${Priority}`;
}
