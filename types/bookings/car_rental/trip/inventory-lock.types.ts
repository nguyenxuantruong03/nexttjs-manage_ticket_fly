import { InventoryLockStatus } from "@/types/common/enums";
import { User } from "@/types/bookings/auth/users";
import { CarRentalVehicle } from "../vehicle/vehicle.types";
import { CarRentalBooking } from "../booking/booking.types";

export interface CarRentalInventoryLock {
  id: string;

  bookingId?: string;
  booking?: CarRentalBooking;

  vehicleId: string;
  vehicle?: CarRentalVehicle;

  userId?: string;
  user?: User;

  startTime: string;

  releasedAt?: string;

  status: InventoryLockStatus;

  endTime: string;

  quantity: number;

  expiresAt: string;

  createdAt: string;
}
