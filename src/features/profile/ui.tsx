import {Box} from '@mui/material';
import {type FC} from 'react';
import {useCurrentUserInfoApi} from './api';
import {useAuthContext} from 'shared/lib/authContext';

export const Profile: FC = () => {
  const {accessToken} = useAuthContext();
  const {data, isPending, isError, isSuccess} = useCurrentUserInfoApi(accessToken);

  return (
    <Box>
      {isPending && <div>Загрузка...</div>}
      {isError && <div>Что-то пошло не так...</div>}
      {isSuccess && data && 'name' in data && <div>Имя пользователя: {data.name}</div>}
    </Box>
  );
};
