import { FC, ReactElement } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { TaskTitleField } from './task-title-field';
import { TaskDescriptionField } from './task-description-field';
import { TaskDateField } from './task-date-field';
import { TaskSelectField } from './task-select-field';
import { STATUS_SELECT_OPTIONS } from './constants/status.constant';
import { PRIORITY_SELECT_OPTIONS } from './constants/priority.constant';

export const TaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      flexDirection="column"
      width="100%"
      px={4}
      my={6}
    >
      <Typography component="h2" variant="h6" mb={2}>
        Create a Task
      </Typography>

      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField disabled={true} />
        <TaskDescriptionField />
        <TaskDateField />

        <Stack direction="row" sx={{ width: '100%' }} spacing={2}>
          <TaskSelectField
            name="status"
            label="Status"
            items={STATUS_SELECT_OPTIONS}
          />
          <TaskSelectField
            name="priority"
            label="Priority"
            items={PRIORITY_SELECT_OPTIONS}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
