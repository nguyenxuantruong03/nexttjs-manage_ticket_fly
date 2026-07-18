// ======================================================
// Fly Favorite
// ======================================================

import { User } from "@/types/bookings/auth/users";
import { Fly } from "../core/fly.types";

export interface FlyFavorite {
  id: string;

  flyId: string;

  fly?: Fly;

  userId: string;

  user?: User;

  createdAt: Date;
}
