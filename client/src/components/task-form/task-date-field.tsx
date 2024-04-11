import { FC, ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import PropTypes from 'prop-types';

import { IDateField } from './interfaces/date-field.interface';

export const TaskDateField: FC<IDateField> = (props): ReactElement => {
  const {
    value = dayjs(),
    onChange = (e) => console.log(e),
    disabled = false,
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="Task Date"
        format="DD/MM/YYYY"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </LocalizationProvider>
  );
};

TaskDateField.propTypes = {
  value: PropTypes.instanceOf(Dayjs),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
