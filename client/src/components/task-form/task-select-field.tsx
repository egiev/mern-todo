import { FC, ReactElement } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';

import { ISelectField } from './interfaces/select-field.interface';

export const TaskSelectField: FC<ISelectField> = (props): ReactElement => {
  const {
    name = 'selectBox',
    label = 'Select Box',
    value = '',
    items = [{ label: 'Add Items', value: '' }],
    disabled = false,
    onChange = (e) => console.log(e),
  } = props;

  return (
    <FormControl fullWidth>
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        disabled={disabled}
      >
        {items.map((item, index) => (
          <MenuItem key={`${item.value}-${index}`} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

TaskSelectField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
