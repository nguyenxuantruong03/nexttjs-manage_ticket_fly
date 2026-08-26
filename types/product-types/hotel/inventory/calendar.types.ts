// hotel-availability-calendar.type.ts

import { HotelAvailability } from "./availability.types";

export interface HotelAvailabilityCalendar {
  id: string;

  availabilityId: string;
  availability: HotelAvailability;

  date: Date;

  totalRooms?: number | null;

  remainingRooms: number;

  available: boolean;

  priceOverride?: number | null;

  stopSell: boolean;

  closed: boolean;

  minimumStay?: number | null;

  closedToArrival: boolean;

  closedToDeparture: boolean;

  note?: string | null;
}
