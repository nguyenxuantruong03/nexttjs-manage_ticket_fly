import { User } from "@/types/bookings/auth/users";
import { BusBooking } from "../booking/booking.types";
import { BusVehicle } from "../vehicle/vehicle.types";
import { BusTrip } from "./trip.types";
import { InventoryLockStatus } from "@/types/common/enums";

export interface BusSeatInventoryLock {
  id: string;

  bookingId?: string | null;
  booking?: BusBooking | null;

  vehicleId: string;
  vehicle?: BusVehicle;

  userId?: string | null;
  user?: User | null;

  tripId: string;
  trip?: BusTrip;

  startTime: Date;

  releasedAt?: Date | null;

  status: InventoryLockStatus;

  endTime: Date;

  quantity: number;

  expiresAt: Date;

  createdAt: Date;
}
