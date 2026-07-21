import { InventoryLockStatus } from "@/types/common/enums";
import { FlyBooking } from "../booking/booking.types";
import { User } from "@/types/bookings/auth/users";
import { FlySeat } from "./cabin.types";
import { FlyTrip } from "../trip/trip.types";

export interface FlySeatInventoryLock {
  id: string;

  tripId: string;
  trip?: FlyTrip;

  seatId: string;
  seat?: FlySeat;

  userId?: string;
  user?: User;

  bookingId?: string;
  booking?: FlyBooking;

  startTime: Date;

  releasedAt?: Date;

  status: InventoryLockStatus;

  endTime: Date;

  quantity: number;

  expiresAt: Date;

  createdAt: Date;
}
