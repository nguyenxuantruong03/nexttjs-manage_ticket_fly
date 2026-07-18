import { CarRentalCalendarStatus } from "../enums";

export interface CarRentalAvailabilityCalendar {
  id: string;

  vehicleId: string;

  startTime: string;

  endTime: string;

  status: CarRentalCalendarStatus;

  bookingId?: string;

  note?: string;

  createdAt: string;
}
