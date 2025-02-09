// models/LoginModel.ts

import { ILoginRequest, ILoginResponse, ILoginValidator, IValidationErrors } from "../interfaces/ILogin";

export class LoginRequestModel implements ILoginRequest {
  constructor(public email: string, public password: string) {}
}

export class LoginResponseModel implements ILoginResponse {
  constructor(
    public status: string,
    public message: string,
    public data?: ILoginResponse["data"],
    public errors?: ILoginResponse["errors"]
  ) {}
}

export class LoginValidator implements ILoginValidator {
  validateEmail(email: string): string | undefined {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return undefined;
  }

  validatePassword(password: string): string | undefined {
    if (!password) return 'Password is required';
    if (password.length < 1) return 'Password is required';
    return undefined;
  }

  validateForm(email: string, password: string): IValidationErrors {
    const errors: IValidationErrors = {};
    
    const emailError = this.validateEmail(email);
    if (emailError) errors.email = emailError;

    const passwordError = this.validatePassword(password);
    if (passwordError) errors.password = passwordError;

    return errors;
  }
}