import { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { ITaskDescription } from './interfaces/task-description.interface';

export const TaskDescription: FC<ITaskDescription> = (props): ReactElement => {
  const { description = 'Lorem ipsum dolor,' } = props;

  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

TaskDescription.propTypes = {
  description: PropTypes.string,
};
