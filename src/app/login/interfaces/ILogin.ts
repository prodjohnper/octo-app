export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  status: string;
  message: string;
  data?: {
    userId: number;
    username: string;
    email: string;
    role: string;
    token: string;
  };
  errors?: {
    email: string;
    password: string;
  };
}
