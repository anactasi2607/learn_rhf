import type {FC} from 'react';
import {ClickTimer} from 'features/refExamples';
import {Divider} from '@mui/material';

export const Refs: FC = () => {
  return (
    <>
      <ClickTimer />
      <Divider sx={{mt: 2, mb: 2, borderWidth: 2}} />
    </>
  );
};
