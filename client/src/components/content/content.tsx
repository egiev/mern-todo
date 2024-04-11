import { FC, ReactElement } from 'react';
import { Grid, Box } from '@mui/material';
import dayjs from 'dayjs';

import { Task } from '../task/task';
import { TaskCounter } from '../task-counter/task-counter';
import { Status } from '../task-form/enums/status.enum';

export const Content: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h1>Status Of Your Task As On {dayjs().format('dddd, LL')}</h1>
      </Box>

      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter count={10} status={Status.todo} />
          <TaskCounter count={10} status={Status.inProgress} />
          <TaskCounter count={10} status={Status.completed} />
        </Grid>

        <Grid item display="flex" flexDirection="column" md={8} xs={10}>
          <Task />
          <Task />
          <Task />
        </Grid>
      </Grid>
    </Grid>
  );
};
