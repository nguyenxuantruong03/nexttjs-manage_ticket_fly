import { AirportTransferVehicle } from "../vehicle/vehicle.types";

export interface AirportTransferVehicleAvailability {
  id: string;

  vehicleId: string;
  vehicle: AirportTransferVehicle;

  startDate: string;

  endDate: string;

  available: boolean;

  note: string | null;

  createdAt: string;
}