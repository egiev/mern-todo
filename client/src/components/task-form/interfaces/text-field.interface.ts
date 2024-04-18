import React from 'react';
import { IDisabled } from './disabled.interface';

export interface ITextField extends IDisabled {
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}
