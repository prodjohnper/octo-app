// models/SignupModel.ts

import { ISignupRequest, ISignupResponse, ISignupValidator, IValidationErrors } from "../interfaces/ISignup";

export class SignupRequestModel implements ISignupRequest {
  email: string;
  password: string;

  constructor({ email, password }: { email: string; password: string }) {
    this.email = email;
    this.password = password;
  }
}

export class SignupResponseModel implements ISignupResponse {
  constructor(public data: { detail: string; status: string }) {}
}

export class SignupValidator implements ISignupValidator {
  validateEmail(email: string): string | undefined {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return undefined;
  }

  validatePassword(password: string): string | undefined {
    if (!password) return 'Password is required';
    if (password.length < 8) return 'Password must be at least 8 characters long';
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