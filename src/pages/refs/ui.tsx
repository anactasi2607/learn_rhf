import type {FC} from 'react';
import {ClickTimer, FocusTracker, PreviousInput} from 'features/refExamples';
import {Divider} from '@mui/material';

export const Refs: FC = () => {
  return (
    <>
      <ClickTimer />
      <Divider sx={{mt: 4, mb: 4, borderWidth: 2}} />
      <PreviousInput />
      <Divider sx={{mt: 4, mb: 4, borderWidth: 2}} />
      <FocusTracker />
    </>
  );
};
