import {AppBar, Box, Link, Toolbar, Typography} from '@mui/material';
import type {FC} from 'react';
import {useAuthContext} from 'shared/lib/authContext';

export const Header: FC = () => {
  const {accessToken} = useAuthContext();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{borderBottom: theme => `1px solid ${theme.palette.divider}`}}
    >
      <Toolbar>
        <Link href={'/'} variant="button">
          <Typography variant="h6" component="h6">
            Home
          </Typography>
        </Link>
        <Box component="nav" sx={{ml: 'auto'}}>
          {accessToken && (
            <Link href="/portal-showcase" sx={{mx: 1}}>
              Portal
            </Link>
          )}
          {accessToken && (
            <Link href="/rhf" sx={{mx: 1}}>
              RHF
            </Link>
          )}
          {accessToken && (
            <Link href="/refs" sx={{mx: 1}}>
              Refs
            </Link>
          )}
          {accessToken && (
            <Link href="/profile" sx={{mx: 1}}>
              Профиль
            </Link>
          )}
          {!accessToken && (
            <Link href="/login" sx={{mx: 1}}>
              Регистрация
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
