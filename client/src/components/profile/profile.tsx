import { FC, ReactElement } from 'react';

import { Avatar, Box, Typography } from '@mui/material';

export const Profile: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Avatar
        sx={{
          width: '96px',
          height: '96px',
          backgroundColor: 'primary.main',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h4" color="text.primary">
          R
        </Typography>
      </Avatar>

      <Typography variant="h6" color="text.primary">
        Welcome, Reginald Mabanta
      </Typography>

      <Typography variant="body1" color="text.primary">
        This is your personal task manager
      </Typography>
    </Box>
  );
};
