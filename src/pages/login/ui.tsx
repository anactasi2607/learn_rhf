import {Box, Typography} from '@mui/material';
import {theme} from 'app/providers/MUI/theme';
import {LoginForm} from 'features/login';
import type {FC} from 'react';

export const Login: FC = () => {
  return (
    <Box>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontSize: {xs: '2rem', sm: '2rem'},
          fontWeight: 700,
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 2,
          textAlign: 'center',
        }}
      >
        Вход
      </Typography>
      <LoginForm />
    </Box>
  );
};
