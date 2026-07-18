import { User } from "./users";

export interface VerificationToken {
  id: string;
  email: string;
  token: string;
  expires: Date;
}

export interface PasswordResetToken {
  id: string;
  email: string;
  token: string;
  expires: Date;
}

export interface TwoFactorToken {
  id: string;
  email: string;
  token: string;
  expires: Date;
}

export interface TwoFactorConfirmation {
  id: string;

  userId: string;
  user?: User;
}
