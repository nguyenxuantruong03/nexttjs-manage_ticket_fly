import { CarRentalCalendarStatus } from "../enums";

import { CarRentalBooking } from "../booking/booking.types";

import { CarRentalVehicle } from "../vehicle/vehicle.types";

export interface CarRentalAvailabilityCalendar {
  id: string;

  vehicleId: string;
  vehicle: CarRentalVehicle;

  startTime: string;

  endTime: string;

  status: CarRentalCalendarStatus;

  bookingId: string | null;

  booking: CarRentalBooking | null;

  note: string | null;

  createdAt: string;
}