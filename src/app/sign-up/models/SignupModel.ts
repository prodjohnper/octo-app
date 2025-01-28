import { ISignupRequest, ISignupResponse } from "../interfaces/ISignup";

export class SignupRequestModel implements ISignupRequest {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string
  ) {}
}

export class SignupResponseModel implements ISignupResponse {
  constructor(
    public status: string,
    public message: string,
    public data?: ISignupResponse["data"],
    public errors?: ISignupResponse["errors"]
  ) {}
}
