import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import { ITask } from './interfaces/task.interface';
import { TaskHeader } from './task-header';
import { TaskDescription } from './task-description';
import { TaskFooter } from './task-footer';
import { Priority } from '../task-form/enums/priority.enum';
import { Status } from '../task-form/enums/status.enum';
import { getTaskBorderColor } from './helpers/task-border-color';

export const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = 'Test Title',
    date = new Date(),
    description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    priority = Priority.normal,
    checked = false,
    onChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: getTaskBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter checked={checked} onChange={onChange} onClick={onClick} />
    </Box>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  priority: PropTypes.oneOf([Priority.high, Priority.normal, Priority.low]),
  status: PropTypes.oneOf([Status.todo, Status.inProgress, Status.completed]),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};
