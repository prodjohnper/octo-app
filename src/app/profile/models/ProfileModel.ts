import { IProfile } from "./../interfaces/IProfile";

export class ProfileModel implements IProfile {
  constructor(
    public status: string,
    public message: string,
    public data?: IProfile["data"]
  ) {}
}
