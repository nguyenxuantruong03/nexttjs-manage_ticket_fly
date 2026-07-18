import { RentalVehicleImageCategory, RentalVehicleImagePosition } from "../enums";
import { CarRentalVehicle } from "./vehicle.types";

export interface CarRentalVehicleImage {
  id: string;

  vehicleId: string;

  vehicle?: CarRentalVehicle;

  url: string;

  category: RentalVehicleImageCategory;

  position?: RentalVehicleImagePosition | null;

  alt?: string | null;

  isPrimary: boolean;

  sortOrder: number;

  createdAt: Date;

  updatedAt: Date;
}