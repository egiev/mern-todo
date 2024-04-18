import { ITaskDescription } from './task-description.interface';
import { ITaskFooter } from './task-footer.interface';
import { ITaskHeader } from './task-header.interface';
import { Priority } from '../../task-form/enums/priority.enum';

export interface ITask extends ITaskHeader, ITaskDescription, ITaskFooter {
  priority?: Priority;
}
