import {api} from '../base';
import {CurrentUserInfoResponse} from './types';

const usersApi = api.extend(options => ({prefixUrl: `${options.prefixUrl}/users`}));

export const currentUserInfo = (token?: string) => {
  let request = usersApi;

  if (token) {
    request = request.extend({
      headers: {
        Authorization: token,
      },
    });
  }

  return request.get<CurrentUserInfoResponse>('me').json();
};
