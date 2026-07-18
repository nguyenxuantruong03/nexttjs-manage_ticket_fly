import { YachtAvailabilityCalendar } from "./availability-calendar.types";
import { YachtInventoryLock } from "./inventory-lock.types";

export interface YachtAvailability {
  id: string;

  yachtId: string;

  calendar: YachtAvailabilityCalendar[];
  locks: YachtInventoryLock[];
}