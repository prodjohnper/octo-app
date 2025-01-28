import IForgotPW from "../interfaces/IForgotPW";

class ForgotPW implements IForgotPW {
  constructor(public email: string) {}
}

export default ForgotPW;
