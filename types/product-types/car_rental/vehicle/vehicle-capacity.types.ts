import { CarRentalVehicle } from "./vehicle.types";

export interface CarRentalVehicleCapacity {
  id: string;

  vehicleId: string;
  vehicle?: CarRentalVehicle;

  seatCount?: number | null;

  luggageCount?: number | null;

  doorCount?: number | null;
}