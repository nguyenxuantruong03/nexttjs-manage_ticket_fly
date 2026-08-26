import { YachtAvailability } from "./availability.types";

export interface YachtAvailabilityCalendar {
  id: string;

  availabilityId: string;
  availability: YachtAvailability;

  date: Date;

  available: boolean;

  booked: boolean;

  stopSell: boolean;
}