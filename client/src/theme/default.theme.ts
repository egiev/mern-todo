import { ThemeOptions, createTheme } from '@mui/material';

export const theme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgba(168, 85, 247, .65)',
      light: 'rgba(168, 85, 247, .80)',
      dark: 'rgba(168, 85, 247, .28)',
    },
    background: {
      paper: '#151515',
      default: 'rgba(0, 0, 0, .96)',
    },
  },
});
