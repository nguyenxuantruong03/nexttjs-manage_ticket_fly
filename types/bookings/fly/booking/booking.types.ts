import { Currency } from "@/types/common/enums";
import { FlySeatInventoryLock } from "../aircraft/inventory-lock.types";
import { FlyInterline } from "../alliance/interline.types";
import { FlyItinerary } from "../alliance/itinerary.types";
import { FlyInventoryLock } from "../trip/inventory-lock.types";
import { FlyWaitlist } from "../trip/waitlist.types";
import { FlyBookingStatus } from "../enums";
import { FlyBookingStatusHistory } from "./history.types";
import { FlyPassenger } from "./passenger.types";
import { FlyBookingContact } from "./contact.types";
import { User } from "@/types/bookings/auth/users";

export interface FlyBooking {
  id: string;

  bookingNumber: string;

  userId?: string;

  user?: User;

  contact?: FlyBookingContact;

  passengers?: FlyPassenger[];

  statusHistory?: FlyBookingStatusHistory[];

  status: FlyBookingStatus;

  totalPassengers: number;

  totalAmount: number;

  currency: Currency;

  note?: string;

  interlines?: FlyInterline[];

  itineraries?: FlyItinerary[];

  seatInventoryLock?: FlySeatInventoryLock[];

  FlyInventoryLock?: FlyInventoryLock[];

  waitlist?: FlyWaitlist[];

  createdAt: Date;

  updatedAt: Date;
}
