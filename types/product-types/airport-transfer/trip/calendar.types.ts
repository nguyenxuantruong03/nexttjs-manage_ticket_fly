import { AirportTransferAvailability } from "./availability.types";

export interface AirportTransferAvailabilityCalendar {
  id: string;

  availabilityId: string;
  availability: AirportTransferAvailability;

  date: string;

  available: boolean;

  totalVehicles: number;

  remainingVehicles: number;

  stopSell: boolean;

  minimumNoticeMinutes?: number;

  createdAt: string;
}
