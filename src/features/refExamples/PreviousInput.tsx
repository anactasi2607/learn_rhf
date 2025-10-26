import {useEffect, useRef, useState, type FC} from 'react';
import {Box, TextField, Typography} from '@mui/material';

export const PreviousInput: FC = () => {
  const [value, setValue] = useState('');
  const prevRef = useRef<string>('');

  useEffect(() => {
    if (prevRef.current !== value) {
      prevRef.current = value;
    }
  }, [value]);

  return (
    <Box>
      <Typography variant="h5" align="center" sx={{mb: 4}}>
        Пример 2: Предыдущее состояние
      </Typography>
      <Box sx={{mb: 2}}>
        <TextField
          id="outlined-basic"
          value={value}
          label="Текст"
          variant="outlined"
          onChange={e => setValue(e.target.value)}
        />
      </Box>
      <Typography variant="body2">Предыдущее значение: {prevRef.current}</Typography>
    </Box>
  );
};
