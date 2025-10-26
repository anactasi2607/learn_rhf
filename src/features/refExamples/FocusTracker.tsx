import {useRef, useState, type FC} from 'react';
import {Box, Button, TextField, Typography} from '@mui/material';

export const FocusTracker: FC = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const firstInputRef = useRef<HTMLInputElement>(null);
  const focusCounter = useRef(0);

  const clickHandler = () => {
    firstInputRef.current?.focus();
  };

  const focusCaptureHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    // Проверяем, что фокус пришел именно с другого инпута, а не с кнопки;
    if (e.relatedTarget?.tagName === 'INPUT') {
      focusCounter.current += 1;
      console.log(`Фокус переходил между полями ${focusCounter.current} раз`);
    }
  };

  return (
    <Box>
      <Typography variant="h5" align="center" sx={{mb: 4}}>
        Пример 3: Трекер фокуса
      </Typography>
      <Box sx={{display: 'flex', justifyContent: 'space-beetween', gap: 2, mb: 2}}>
        <TextField
          sx={{flexGrow: 1}}
          inputRef={firstInputRef}
          id="outlined-basic"
          value={value1}
          label="Текст 1"
          variant="outlined"
          onChange={e => setValue1(e.target.value)}
          onFocusCapture={focusCaptureHandler}
        />
        <TextField
          sx={{flexGrow: 1}}
          id="outlined-basic"
          value={value2}
          label="Текст 2"
          variant="outlined"
          onChange={e => setValue2(e.target.value)}
          onFocusCapture={focusCaptureHandler}
        />
      </Box>
      <Button variant="contained" onClick={clickHandler}>
        Сфокусировать на первом
      </Button>
    </Box>
  );
};
