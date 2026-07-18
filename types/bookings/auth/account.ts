import { User } from "./users";

export interface Account {
  id: string;

  userId: string;

  type: string;

  provider: string;

  providerAccountId: string;

  user?: User;
}
