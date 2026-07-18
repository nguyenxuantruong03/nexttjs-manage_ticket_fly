import { User } from "@/types/bookings/auth/users";
import { AirportTransfer } from "../core/airport-transfer.types";

export interface AirportTransferFavorite {
  id: string;

  transferId: string;
  transfer?: AirportTransfer;

  userId: string;
  user?: User;

  createdAt: string;
}
