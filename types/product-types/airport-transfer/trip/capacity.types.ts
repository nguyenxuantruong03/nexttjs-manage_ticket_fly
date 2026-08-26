import { AirportTransfer } from "../core/airport-transfer.types";

export interface AirportTransferCapacity {
  id: string;

  transferId: string;
  transfer: AirportTransfer;

  maxTripsPerDay?: number;

  maxVehiclesPerDay?: number;

  overbookingAllowed: boolean;
}
