import { FC, ReactElement, useEffect, useState } from 'react';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';

import { TaskTitleField } from './task-title-field';
import { TaskDescriptionField } from './task-description-field';
import { TaskDateField } from './task-date-field';
import { TaskSelectField } from './task-select-field';
import { sendAPIRequest } from '../../helpers/api-request';
import { STATUS_SELECT_OPTIONS } from './constants/status.constant';
import { PRIORITY_SELECT_OPTIONS } from './constants/priority.constant';
import { Status } from './enums/status.enum';
import { Priority } from './enums/priority.enum';

interface ITaskForm {
  title: string;
  description: string;
  date: Date;
  status: string;
  priority: Priority;
}

export const TaskForm: FC = (): ReactElement => {
  const [taskForm, setTaskForm] = useState<ITaskForm>({
    title: '',
    description: '',
    date: new Date(),
    status: Status.todo,
    priority: Priority.normal,
  });
  const [showAlertMessage, setShowAlertMessage] = useState<boolean>(false);

  const onHandleChange = (identifier: keyof ITaskForm, event: unknown) => {
    setTaskForm((previous) => ({
      ...previous,
      [identifier]: event,
    }));
  };

  const createMutation = useMutation({
    mutationFn: (data: ITaskForm) =>
      sendAPIRequest('http://localhost:3200/tasks', 'POST', data),
  });

  const createTaskHandler = () => {
    const { title, description, date } = taskForm;

    if (!title || !description || !date) return;

    createMutation.mutate(taskForm);
  };

  useEffect(() => {
    if (createMutation.isSuccess) setShowAlertMessage(true);

    const timeout = setTimeout(() => {
      setShowAlertMessage(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [createMutation.isSuccess]);

  return (
    <Box
      display="flex"
      alignItems="flex-start"
      flexDirection="column"
      width="100%"
      px={4}
      my={6}
    >
      {showAlertMessage && (
        <Alert security="success" sx={{ width: '100%', mb: '16px' }}>
          <AlertTitle>Success</AlertTitle>
          The task has been created successfully
        </Alert>
      )}

      <Typography component="h2" variant="h6" mb={2}>
        Create a Task
      </Typography>

      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField
          value={taskForm.title}
          onChange={(e) => onHandleChange('title', e.target.value)}
          disabled={createMutation.isPending}
        />
        <TaskDescriptionField
          value={taskForm.description}
          onChange={(e) => onHandleChange('description', e.target.value)}
          disabled={createMutation.isPending}
        />
        <TaskDateField
          value={taskForm.date}
          onChange={(e) => onHandleChange('date', e)}
          disabled={createMutation.isPending}
        />

        <Stack direction="row" sx={{ width: '100%' }} spacing={2}>
          <TaskSelectField
            name="status"
            label="Status"
            items={STATUS_SELECT_OPTIONS}
            value={taskForm.status}
            onChange={(e) => onHandleChange('status', e.target.value)}
            disabled={createMutation.isPending}
          />
          <TaskSelectField
            name="priority"
            label="Priority"
            items={PRIORITY_SELECT_OPTIONS}
            value={taskForm.priority}
            onChange={(e) => onHandleChange('priority', e.target.value)}
            disabled={createMutation.isPending}
          />
        </Stack>

        {createMutation.isPaused && <LinearProgress />}

        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={createTaskHandler}
          disabled={
            !taskForm.title ||
            !taskForm.description ||
            !taskForm.date ||
            !taskForm.status ||
            !taskForm.priority
          }
        >
          Create A Task
        </Button>
      </Stack>
    </Box>
  );
};
