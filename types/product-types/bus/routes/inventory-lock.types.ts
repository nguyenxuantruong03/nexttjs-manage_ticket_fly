import { InventoryLockStatus } from "@/types/common/enums";
import { User } from "@/types/users/auth/users";

import { BusBooking } from "../booking/booking.types";
import { BusTrip } from "./trip.types";
import { BusVehicle } from "../vehicle/vehicle.types";

export interface BusSeatInventoryLock {
  id: string;

  bookingId: string | null;
  booking: BusBooking | null;

  vehicleId: string;
  vehicle: BusVehicle;

  userId: string | null;
  user: User | null;

  tripId: string;
  trip: BusTrip;

  startTime: string;

  releasedAt: string | null;

  status: InventoryLockStatus;

  endTime: string;

  quantity: number;

  expiresAt: string;

  createdAt: string;
}