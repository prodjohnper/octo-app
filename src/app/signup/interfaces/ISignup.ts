// interfaces/ISignup.ts

export interface ISignupRequest {
    email: string;
    password: string;
}

export interface ISignupResponse {
  data: {
    detail: string;
    status: string;
  };
}

export interface IValidationErrors {
  email?: string;
  password?: string;
}

export interface ISignupValidator {
  validateEmail(email: string): string | undefined;
  validatePassword(password: string): string | undefined;
}
