
export interface HotelAvailabilityCalendar {
  id: string;

  availabilityId: string;

  date: Date;

  available: boolean;

  remainingRooms?: number | null;

  priceOverride?: number | null;

  stopSell?: boolean | null;

  minimumStay?: number | null;

  closedToArrival?: boolean | null;

  closedToDeparture?: boolean | null;
}