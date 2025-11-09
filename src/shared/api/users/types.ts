export interface CurrentUserInfoResponseSuccess {
  id: string;
  email: string;
  name: string;
  avatarPath: string;
  about: string;
  phone: string;
  roles: string[];
}

export interface CurrentUserInfoResponseError {
  statusCode: number;
  message: string[];
  error: string;
}

export type CurrentUserInfoResponse = CurrentUserInfoResponseSuccess | CurrentUserInfoResponseError;
