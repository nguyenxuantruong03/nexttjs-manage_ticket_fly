import { BusFuelType } from "../enums";

export interface BusVehicleSpecification {
  id: string;

  vehicleId: string;

  engineType?: string;

  transmission?: string;

  fuelType?: BusFuelType;

  suspension?: string;

  airConditioning?: boolean;

  wifiAvailable?: boolean;

  toiletAvailable?: boolean;

  createdAt: string;
}