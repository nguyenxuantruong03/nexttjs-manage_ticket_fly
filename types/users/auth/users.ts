import { ProviderBooking } from "../provider-bookings";
import { Account } from "./account";
import { TwoFactorConfirmation } from "./token";

export interface User {
  id: string;

  email: string;
  emailVerified?: Date | null;
  reSendemail: number;
  name: string;
  image?: string | null;
  banUntil?: Date | null;
  password: string;
  hashedRefreshToken?: string | null;
  isTwoFactorEnabled: boolean;
  role: Role;
  account?: Account | null;
  twoFactorConfirmation?: TwoFactorConfirmation | null;
  providers: ProviderBooking[];
  createdAt: Date;
  updatedAt: Date;
}

export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
}
