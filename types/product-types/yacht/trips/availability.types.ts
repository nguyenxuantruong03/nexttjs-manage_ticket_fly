import { Yacht } from "../core/yacht.types";
import { YachtAvailabilityCalendar } from "./availability-calendar.types";
import { YachtInventoryLock } from "./inventory-lock.types";

export interface YachtAvailability {
  id: string;

  yachtId: string;
  yacht: Yacht;

  calendar: YachtAvailabilityCalendar[];
  locks: YachtInventoryLock[];
}
