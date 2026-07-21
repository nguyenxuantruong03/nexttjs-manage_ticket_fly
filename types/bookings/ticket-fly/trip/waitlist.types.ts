import { FlyBooking } from "../booking/booking.types";
import { FlyInventoryFare } from "./inventory.types";

export interface FlyWaitlist {
  id: string;

  inventoryFareId: string;

  inventoryFare?: FlyInventoryFare;

  bookingId?: string;

  booking?: FlyBooking;

  position: number;

  createdAt: Date;
}