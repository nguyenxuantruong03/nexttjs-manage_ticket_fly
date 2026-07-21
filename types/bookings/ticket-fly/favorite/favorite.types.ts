// ======================================================
// Fly Favorite
// ======================================================

import { User } from "@/types/bookings/auth/users";
import { TicketFly } from "../core/fly.types";

export interface FlyFavorite {
  id: string;

  flyId: string;

  fly?: TicketFly;

  userId: string;

  user?: User;

  createdAt: Date;
}
