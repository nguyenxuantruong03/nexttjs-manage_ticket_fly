import { RentalVehicleCondition } from "../enums";
import { CarRentalVehicle } from "./vehicle.types";

export interface CarRentalVehicleSpecification {
  id: string;

  vehicleId: string;

  vehicle?: CarRentalVehicle;

  vin?: string | null;

  engineSizeCc?: number | null;

  horsePower?: number | null;

  batteryCapacityKwh?: number | null;

  rangeKm?: number | null;

  condition?: RentalVehicleCondition | null;

  previousOwners?: number | null;
}