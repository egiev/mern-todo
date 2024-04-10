import { FC, ReactElement } from 'react';

import { Grid } from '@mui/material';

export const Content: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <h1>Content Here</h1>
    </Grid>
  );
};
