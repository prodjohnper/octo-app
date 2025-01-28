import { ILoginRequest, ILoginResponse } from "../interfaces/ILogin";

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
