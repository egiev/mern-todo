import { FC, ReactElement } from 'react';

import { Grid } from '@mui/material';

export const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container minHeight={'100vh'}>
      <Grid item md={8} px={4}>
        <h1>Content Here</h1>
      </Grid>
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
        <h1>Sidebar here</h1>
      </Grid>
    </Grid>
  );
};
