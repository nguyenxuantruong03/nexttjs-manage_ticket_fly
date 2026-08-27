import { AirportTransferRoutePrice } from "@/types/product-types/airport-transfer/pricing/route-price.types";
import { AirportTransferVehicle } from "@/types/product-types/airport-transfer/vehicle/vehicle.types";
import { BusVehicle } from "@/types/product-types/bus/vehicle/vehicle.types";
import { CarRentalVehicle } from "@/types/product-types/car_rental/vehicle/vehicle.types";
import { BookingType } from "../commerce/booking-type";

export type VehicleType = {
  id: string;

  name: string;
  slug: string;
  description: string | null;
  icon: string | null;

  sortOrder: number;
  active: boolean;

  bookingTypeIds: string[];
  bookingTypes?: BookingType[];

  airportTransferVehicles: AirportTransferVehicle[];

  busVehicles: BusVehicle[];

  carRentalVehicles: CarRentalVehicle[];

  routePrices: AirportTransferRoutePrice[];

  createdAt: Date;
  updatedAt: Date;
};
