export interface ILoginRequest {
  email: string;
  password: string;
}

interface ILoginResponse {
  status: string;
  message: string;
}

export interface ILoginSuccess extends ILoginResponse {
  data: {
    userId: number;
    username: string;
    email: string;
    role: string;
    token: string;
  };
}

export interface ILoginValErr extends ILoginResponse {
  errors: {
    email: string;
    password: string;
  };
}

export type ILoginInvalid = ILoginResponse;
export type ILoginLockout = ILoginResponse;
export type ILoginServerErr = ILoginResponse;
