import {useRef, type FC} from 'react';
import {Box, Typography, Button} from '@mui/material';

interface ClickData {
  startTime: number | null;
  clickCount: number;
}

export const ClickTimer: FC = () => {
  const metaInfo = useRef<ClickData>({
    startTime: null,
    clickCount: 0,
  });

  const clickHandler = () => {
    const currentTime = Date.now();

    if (metaInfo.current.startTime === null) {
      metaInfo.current.startTime = currentTime;
    }

    metaInfo.current.clickCount += 1;

    console.group('Статистика: ');
    console.log('Общее количество кликов: ', metaInfo.current.clickCount);
    console.log(`С момента первого клика прошло: ${currentTime - metaInfo.current.startTime} мс`);
    console.groupEnd();
  };

  return (
    <Box>
      <Typography variant="h5" align="center" sx={{mb: 6}}>
        Пример 1: Сбор статистики по кликам
      </Typography>
      <Box>
        <Button variant="contained" onClick={clickHandler}>
          Click me!
        </Button>
      </Box>
    </Box>
  );
};
