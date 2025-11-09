import {currentUserInfoRequest} from 'shared/api';
import {useQuery} from '@tanstack/react-query';

export const useCurrentUserInfoApi = (token: string) => {
  const {data, isPending, isSuccess, isError} = useQuery({
    queryKey: ['currentUser', token],
    queryFn: async () => {
      const data = currentUserInfoRequest(token);

      return data;
    },
    enabled: !!token,
  });

  return {data, isPending, isSuccess, isError};
};
