import type {FC} from 'react';
import {Box, Button, Typography} from '@mui/material';
import {theme} from 'app/providers/MUI/theme';
import {Tooltip} from 'shared/ui/Tooltip/Tooltip';
import {TooltipPosition} from 'shared/ui/Tooltip/TooltipPosition';

export const Main: FC = () => {
  return (
    <>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontSize: {xs: '2rem', sm: '2rem'},
          fontWeight: 700,
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 4,
          textAlign: 'center',
        }}
      >
        Стартовая страница
      </Typography>
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontSize: {xs: '1rem', sm: '1rem'},
          fontWeight: 700,
          mb: 2,
        }}
      >
        Тултипы
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '20px',
          mb: 2,
        }}
      >
        <Tooltip content="Это подсказка справа" position={TooltipPosition.RIGHT}>
          <Button variant="contained">RIGHT</Button>
        </Tooltip>
        <Tooltip content="Это подсказка сверху" position={TooltipPosition.TOP}>
          <Button variant="contained">TOP</Button>
        </Tooltip>
        <Tooltip content="Это подсказка снизу" position={TooltipPosition.BOTTOM}>
          <Button variant="contained">BOTTOM</Button>
        </Tooltip>
        <Tooltip content="Это подсказка слева" position={TooltipPosition.LEFT}>
          <Button variant="contained">LEFT</Button>
        </Tooltip>
      </Box>
    </>
  );
};
