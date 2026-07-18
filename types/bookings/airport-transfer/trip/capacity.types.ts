
export interface AirportTransferCapacity {
  id: string;

  transferId: string;

  maxTripsPerDay?: number;

  maxVehiclesPerDay?: number;

  overbookingAllowed: boolean;
}