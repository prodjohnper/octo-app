export interface IProfile {
  status: string;
  message: string;
  data?: {
    userId: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    created_at: string;
    updated_at: string;
  };
}
