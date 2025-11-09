import {Typography} from '@mui/material';
import {theme} from 'app/providers/MUI/theme';
import type {FC} from 'react';

export const Main: FC = () => {
  return (
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
      Стартовая страница
    </Typography>
  );
};
