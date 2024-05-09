import { FC, ReactElement } from 'react';
import { Grid, Box, Alert, LinearProgress } from '@mui/material';
import { useMutation, useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';

import { Task } from '../task/task';
import { TaskCounter } from '../task-counter/task-counter';
import { Status } from '../task-form/enums/status.enum';
import { Priority } from '../task-form/enums/priority.enum';
import { sendAPIRequest } from '../../helpers/api-request';
import { ITaskAPI } from './interfaces/task-api.interface';
import { countTask } from './helpers/count-task.helper';

export const Content: FC = (): ReactElement => {
  const {
    data: todos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['task'],
    queryFn: async () =>
      await sendAPIRequest<ITaskAPI[]>('http://localhost:3200/tasks', 'GET'),
  });

  const updateTaskMutation = useMutation({
    mutationFn: (data: { id: string; status: Status }) =>
      sendAPIRequest(`http://localhost:3200/tasks/${data.id}`, 'PUT', {
        status: data.status,
      }),
  });

  const onStatusChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    updateTaskMutation.mutate({
      id,
      status: e.target.checked ? Status.inProgress : Status.todo,
    });
  };

  const onMarkCompleteHandler = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string,
  ) => {
    updateTaskMutation.mutate({ id, status: Status.completed });
  };

  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h1>Status Of Your Task As On {format(new Date(), 'PPPP')}</h1>
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
          <TaskCounter
            count={todos ? countTask(todos, 'todo') : undefined}
            status={Status.todo}
          />
          <TaskCounter
            count={todos ? countTask(todos, 'inProgress') : undefined}
            status={Status.inProgress}
          />
          <TaskCounter
            count={todos ? countTask(todos, 'completed') : undefined}
            status={Status.completed}
          />
        </Grid>

        <Grid item display="flex" flexDirection="column" md={8} xs={10}>
          {error && (
            <Alert severity="error">There was an error fetching the task</Alert>
          )}

          {!error && Array.isArray(todos) && todos.length === 0 && (
            <Alert severity="warning">
              You do not have tasks created yet. Start by creating some task.
            </Alert>
          )}

          {isLoading ? (
            <LinearProgress />
          ) : (
            Array.isArray(todos) &&
            todos.length > 0 &&
            todos.map((todo) => {
              return todo.status === Status.todo ||
                todo.status === Status.inProgress ? (
                <Task
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  description={todo.description}
                  date={new Date(todo.date)}
                  status={todo.status as Status}
                  priority={todo.priority as Priority}
                  onChange={onStatusChangeHandler}
                  onClick={onMarkCompleteHandler}
                />
              ) : (
                false
              );
            })
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
