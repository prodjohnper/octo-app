import { ISignupRequest, ISignupResponse } from "../interfaces/ISignup";

export class SignupRequestModel implements ISignupRequest {
  constructor(public data: { email: string; password: string }) {}
}

export class SignupResponseModel implements ISignupResponse {
  constructor(public data: { detail: string; status: string }) {}
}
