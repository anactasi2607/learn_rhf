export interface SignInRequest {
  email: string;
  name?: string;
  password: string;
  avatarPath?: string;
  about?: string;
  phone?: string;
}

export interface SignInResponseSuccess {
  user: {
    id: string;
    email: string;
  };
  accessToken: string;
}

export interface SignInResponseError {
  statusCode: number;
  message: string[];
  error: string;
}

export type SignResponse = SignInResponseSuccess | SignInResponseError;
