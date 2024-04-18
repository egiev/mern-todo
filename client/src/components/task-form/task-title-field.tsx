import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

import { ITextField } from './interfaces/text-field.interface';

export const TaskTitleField: FC<ITextField> = (props): ReactElement => {
  const {
    value = '',
    disabled = false,
    onChange = (e) => console.log(e),
  } = props;

  return (
    <TextField
      id="title"
      name="title"
      label="Task Title"
      placeholder="Task Title"
      variant="outlined"
      fullWidth
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TaskTitleField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
