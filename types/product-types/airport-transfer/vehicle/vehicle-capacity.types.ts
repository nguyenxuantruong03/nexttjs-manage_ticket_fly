import { AirportTransferVehicle } from "../vehicle/vehicle.types";

export interface AirportTransferVehicleCapacity {
  id: string;

  vehicleId: string;
  vehicle: AirportTransferVehicle;

  passengerCount: number;

  luggageCount: number | null;

  cabinBaggageCount: number | null;

  oversizedLuggage: number | null;
}