import { FC, ReactElement } from 'react';
import { Box, Button, FormControlLabel, Switch } from '@mui/material';
import PropTypes from 'prop-types';

import { ITaskFooter } from './interfaces/task-footer.interface';

export const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
    checked = false,
    onChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box display="flex" justifyContent="space-between" width="100%" mt={4}>
      <FormControlLabel
        label="In Progress"
        control={
          <Switch
            checked={checked}
            onChange={onChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
      />

      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#ffffff' }}
        onClick={onClick}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};
