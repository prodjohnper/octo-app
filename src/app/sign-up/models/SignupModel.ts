import { ISignupRequest, ISignupResponse } from "../interfaces/ISignup";

export class SignupRequestModel implements ISignupRequest {
  constructor(
    // public firstName: string,
    // public lastName: string,
    public email: string,
    public password: string
  ) {}
}

export class SignupResponseModel implements ISignupResponse {
  constructor(
    public detail: string,
    public status: string
  ) // public data?: ISignupResponse["data"],
  // public errors?: ISignupResponse["errors"]
  {}
}
