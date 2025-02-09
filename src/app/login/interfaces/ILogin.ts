// interfaces/ILogin.ts

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

export interface IValidationErrors {
  email?: string;
  password?: string;
}

export interface ILoginValidator {
  validateEmail(email: string): string | undefined;
  validatePassword(password: string): string | undefined;
}