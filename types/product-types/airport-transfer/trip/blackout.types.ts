import { AirportTransferAvailability } from "./availability.types";

export interface AirportTransferBlackoutDate {
  id: string;

  availabilityId: string;
  availability: AirportTransferAvailability;

  date: string;

  reason?: string;

  createdAt: string;
}
