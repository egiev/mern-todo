import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

import { ITextField } from './interfaces/text-field.interface';

export const TaskDescriptionField: FC<ITextField> = (props): ReactElement => {
  const {
    value = '',
    disabled = false,
    onChange = (e) => console.log(e),
  } = props;

  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      rows={4}
      multiline
      fullWidth
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

TaskDescriptionField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
