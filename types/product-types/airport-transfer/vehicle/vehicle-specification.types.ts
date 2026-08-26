import { AirportTransferVehicle } from "./vehicle.types";

export interface AirportTransferVehicleSpecification {
  id: string;

  vehicleId: string;
  vehicle: AirportTransferVehicle;

  engineSizeCc: number | null;

  fuelCapacity: number | null;

  mileageKm: number | null;

  vin: string | null;
}
