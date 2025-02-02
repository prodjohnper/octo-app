export interface ISignupRequest {
  data: {
    email: string;
    password: string;
  };
}

export interface ISignupResponse {
  data: {
    detail: string;
    status: string;
  };
}
