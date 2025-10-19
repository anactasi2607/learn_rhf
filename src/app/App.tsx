import {Outlet} from 'react-router';
import {Box, Container} from '@mui/material';
import {withProviders} from './providers';
import {Header} from 'widgets/header';

export const App = withProviders(() => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Container maxWidth="lg" sx={{py: 8}}>
          <Outlet />
        </Container>
      </Box>
    </>
  );
});
