import { IForgotPWRequest } from "../interfaces/IForgotPW";

export class ForgotPWRequestModel implements IForgotPWRequest {
  constructor(public email: string) {}
}
