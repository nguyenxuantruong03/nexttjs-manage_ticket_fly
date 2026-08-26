import { User } from "@/types/users/auth/users";

import { Bus } from "../core/bus.types";

export interface BusFavorite {
  id: string;

  userId: string;
  user: User;

  busId: string;
  bus: Bus;

  createdAt: string;
}