import { FC, ReactElement } from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { ITaskCounter } from './interfaces/task-counter.interface';
import { Status } from '../task-form/enums/status.enum';
import { getTaskCounterBorderColor } from './helpers/task-counter-border-color';
import { getTaskCounterLabel } from './helpers/task-counter-label';

export const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
  const { count = 0, status = Status.completed } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Avatar
        sx={{
          backgroundColor: 'transparent',
          border: '5px solid',
          width: '96px',
          height: '96px',
          marginBottom: '16px',
          borderColor: getTaskCounterBorderColor(status),
        }}
      >
        <Typography color="#ffffff" variant="h4">
          {count}
        </Typography>
      </Avatar>

      <Typography
        color="#ffffff"
        variant="h5"
        fontWeight="bold"
        fontSize="20px"
      >
        {getTaskCounterLabel(status)}
      </Typography>
    </Box>
  );
};

TaskCounter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf([Status.todo, Status.inProgress, Status.completed]),
};
