import { FC, ReactElement } from 'react';
import { Box, Button, FormControlLabel, Switch } from '@mui/material';
import PropTypes from 'prop-types';

import { ITaskFooter } from './interfaces/task-footer.interface';
import { Status } from '../task-form/enums/status.enum';

export const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
    id,
    status = Status.todo,
    onChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box display="flex" justifyContent="space-between" width="100%" mt={4}>
      <FormControlLabel
        label="In Progress"
        control={
          <Switch
            onChange={(e) => onChange(e, id)}
            defaultChecked={status === Status.inProgress}
          />
        }
      />

      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#ffffff' }}
        onClick={(e) => onClick(e, id)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.oneOf(Object.values(Status)),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};
