

export interface YachtAvailabilityCalendar {
  id: string;

  availabilityId: string;

  date: Date;

  available: boolean;

  booked: boolean;

  stopSell: boolean;
}