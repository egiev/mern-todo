import { Status } from '../../task-form/enums/status.enum';

export interface ITaskFooter {
  id: string;
  status?: Status;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
