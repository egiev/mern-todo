import { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';

import { Profile } from '../profile/profile';
import { TaskForm } from '../task-form/task-form';

export const Sidebar: FC = (): ReactElement => {
  return (
    <Grid
      item
      md={4}
      sx={{
        height: '100vh',
        position: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
        backgroundColor: 'background.paper',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Profile name="Egie" />

      <TaskForm />
    </Grid>
  );
};
