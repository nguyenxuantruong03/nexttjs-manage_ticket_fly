// hotel-availability.type.ts

import { HotelAvailabilityCalendar } from "./calendar.types";
import { HotelInventory } from "./inventory.types";

export interface HotelAvailability {
  id: string;

  inventoryId: string;
  inventory: HotelInventory;

  availableRooms: number;

  lastUpdated?: Date | null;

  calendar: HotelAvailabilityCalendar[];
}
