import { FuelType } from "@/types/common/catalog/fuel-type";

import { BusVehicle } from "./vehicle.types";

export interface BusVehicleSpecification {
  id: string;

  vehicleId: string;
  vehicle: BusVehicle;

  engineType: string | null;

  transmission: string | null;

  fuelTypeId: string | null;
  fuelType: FuelType | null;

  suspension: string | null;

  airConditioning: boolean | null;

  wifiAvailable: boolean | null;

  toiletAvailable: boolean | null;

  createdAt: string;
}