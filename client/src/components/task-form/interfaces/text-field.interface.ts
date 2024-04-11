import React from 'react';
import { IDisabled } from './disabled.interface';

export interface ITextField extends IDisabled {
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}
