import { CarRentalVehicle } from "./vehicle.types";

export interface CarRentalVehicleMaintenance {
  id: string;

  vehicleId: string;

  vehicle?: CarRentalVehicle;

  type?: string | null;

  description?: string | null;

  mileageKm?: number;

  serviceDate?: Date | null;

  cost?: number | null;
}