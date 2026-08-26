import { RentalVehicleDocumentType } from "../enums";
import { CarRentalVehicle } from "./vehicle.types";

export interface CarRentalVehicleDocument {
  id: string;

  vehicleId: string;
  vehicle?: CarRentalVehicle;

  type: RentalVehicleDocumentType;

  url: string;

  expiryDate?: Date | null;
}