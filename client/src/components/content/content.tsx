import { FC, ReactElement } from 'react';
import { Grid, Box } from '@mui/material';
import dayjs from 'dayjs';

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
          <Box>Counter</Box>
          <Box>Counter</Box>
          <Box>Counter</Box>
        </Grid>

        <Grid item display="flex" flexDirection="column" md={8} xs={10}>
          <Box>Counter</Box>
          <Box>Counter</Box>
          <Box>Counter</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
