import { FC, ReactElement } from 'react';
import { Box, Chip, Typography } from '@mui/material';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

import { ITaskHeader } from './interfaces/task-header.interface';

export const TaskHeader: FC<ITaskHeader> = (props): ReactElement => {
  const { title = 'Default Title', date = new Date() } = props;

  return (
    <Box display="flex" justifyContent="space-between" width="100%" mb={3}>
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" label={dayjs(date).format('MM/DD/YYYY')} />
      </Box>
    </Box>
  );
};

TaskHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};
