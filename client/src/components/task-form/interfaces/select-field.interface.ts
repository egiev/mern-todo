import { SelectChangeEvent } from '@mui/material';

import { IDisabled } from './disabled.interface';

export interface ISelectItem {
  label: string;
  value: string;
}

export interface ISelectField extends IDisabled {
  name?: string;
  label?: string;
  value?: string;
  items?: ISelectItem[];
  onChange?: (e: SelectChangeEvent) => void;
}
