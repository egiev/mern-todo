import { ITaskDescription } from './task-description.interface';
import { ITaskFooter } from './task-footer.interface';
import { ITaskHeader } from './task-header.interface';
import { Priority } from '../../task-form/enums/priority.enum';
import { Status } from '../../task-form/enums/status.enum';

export interface ITask extends ITaskHeader, ITaskDescription, ITaskFooter {
  id?: string;
  priority?: Priority;
  status?: Status;
}
