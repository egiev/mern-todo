import { FC, ReactElement } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from './theme/default.theme';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <h1>Hello world</h1>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
