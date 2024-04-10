import { FC, ReactElement } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from './theme/default.theme';
import { Dashboard } from './pages/dashboard/dashboard';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Dashboard />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
