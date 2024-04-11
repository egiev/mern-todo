import { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';

import { Sidebar } from '../../components/sidebar/sidebar';
import { Content } from '../../components/content/content';

export const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container minHeight={'100vh'}>
      <Content />
      <Sidebar />
    </Grid>
  );
};
