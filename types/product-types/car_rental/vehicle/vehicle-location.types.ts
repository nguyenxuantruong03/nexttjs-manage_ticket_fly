import { Address } from "@/types/location/address";
import { CarRentalVehicle } from "./vehicle.types";

export interface CarRentalVehicleLocation {
  id: string;

  vehicleId: string;
  vehicle?: CarRentalVehicle;

  addressId?: string | null;
  address?: Address | null;
}
