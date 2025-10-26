import type {ComponentType} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material';
import {theme} from './theme';

export const withTheme = (WrappedComponent: ComponentType) => () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <WrappedComponent />
  </ThemeProvider>
);
