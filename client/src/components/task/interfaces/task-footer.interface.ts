import { Status } from '../../task-form/enums/status.enum';

export interface ITaskFooter {
  id: string;
  status?: Status;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string,
  ) => void;
}
