import { AirportTransferBlackoutDate } from "./blackout.types";
import { AirportTransferAvailabilityCalendar } from "./calendar.types";
import { AirportTransferInventoryLock } from "./inventory-lock.types";

export interface AirportTransferAvailability {
  id: string;

  transferId: string;

  available: boolean;

  calendars: AirportTransferAvailabilityCalendar[];

  locks: AirportTransferInventoryLock[];

  blackoutDates: AirportTransferBlackoutDate[];

  updatedAt: string;

  createdAt: string;
}