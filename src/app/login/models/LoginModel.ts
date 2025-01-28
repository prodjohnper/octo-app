import * as I from "../interfaces/ILogin";

export class LoginRequestModel implements I.ILoginRequest {
  constructor(public email: string, public password: string) {}
}

export class LoginSuccessModel implements I.ILoginSuccess {
  constructor(
    public status: string,
    public message: string,
    public data: I.ILoginSuccess["data"]
  ) {}
}

export class LoginValErrModel implements I.ILoginValErr {
  constructor(
    public status: string,
    public message: string,
    public errors: I.ILoginValErr["errors"]
  ) {}
}

export class LoginInvalidModel implements I.ILoginInvalid {
  constructor(public status: string, public message: string) {}
}

export class LoginLockoutModel implements I.ILoginLockout {
  constructor(public status: string, public message: string) {}
}

export class LoginServerErrModel implements I.ILoginServerErr {
  constructor(public status: string, public message: string) {}
}
