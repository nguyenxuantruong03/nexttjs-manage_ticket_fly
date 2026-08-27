import { BusVehicleSpecification } from "@/types/product-types/bus/vehicle/specification.types";
import { BookingType } from "../commerce/booking-type";
import { YachtVehicle } from "@/types/product-types/yacht/vehicles/vehicle.types";
import { AirportTransferVehicle } from "@/types/product-types/airport-transfer/vehicle/vehicle.types";

export interface FuelType {
  id: string;

  name: string;
  slug: string;
  icon?: string | null;
  sortOrder: number;
  active: boolean;

  bookingTypeIds: string[];
  bookingTypes?: BookingType[];

  busSpecifications?: BusVehicleSpecification[];
  yachtVehicles?: YachtVehicle[];
  airportTransferVehicles?: AirportTransferVehicle[];

  createdAt: Date;
  updatedAt: Date;
}
