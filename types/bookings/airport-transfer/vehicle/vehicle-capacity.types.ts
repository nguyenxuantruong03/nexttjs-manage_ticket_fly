
export interface AirportTransferVehicleCapacity {
  id: string;

  vehicleId: string;

  passengerCount: number;

  luggageCount?: number;

  cabinBaggageCount?: number;

  oversizedLuggage?: number;
}
