import { IDisabled } from './disabled.interface';

export interface IDateField extends IDisabled {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
}
