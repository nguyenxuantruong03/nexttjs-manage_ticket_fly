import { HotelAvailabilityCalendar } from "./calendar.types";

export interface HotelAvailability {
  id: string;

  inventoryId: string;

  isAvailable: boolean;

  availableRooms?: number | null;

  lastUpdated?: Date | null;

  calendar: HotelAvailabilityCalendar[];
}
