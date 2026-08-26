import { Yacht } from "../core/yacht.types";
import { YachtBooking } from "../booking/booking.types";
import { YachtRoute } from "../routes/route.types";
import { YachtTripStatus } from "../enums";
import { YachtInventoryLock } from "./inventory-lock.types";
import { YachtSchedule } from "./schedule.types";
import { YachtTripPrice } from "./trip-price.types";

export interface YachtTrip {
  id: string;

  yachtId: string;
  yacht: Yacht;

  routeId: string | null;
  route: YachtRoute | null;

  bookings: YachtBooking[];

  departureTime: Date;
  arrivalTime: Date;

  status: YachtTripStatus;

  maxGuests: number | null;

  schedule: YachtSchedule | null;

  price: YachtTripPrice | null;

  locks: YachtInventoryLock[];

  createdAt: Date;
  updatedAt: Date;
}