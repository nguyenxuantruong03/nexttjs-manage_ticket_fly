import { HotelMedia } from "@/types/product-types/hotel/core/hotel-media.types";
import { BookingType } from "../commerce/booking-type";
import { RoomMedia } from "@/types/product-types/hotel/room/room-media.types";
import { YachtImage } from "@/types/product-types/yacht/core/image.types";
import { YachtVehicleImage } from "@/types/product-types/yacht/vehicles/vehicle-image.types";
import { CarRentalMedia } from "@/types/product-types/car_rental/core/image.types";
import { CarRentalVehicleMedia } from "@/types/product-types/car_rental/vehicle/vehicle-image.types";
import { BusImage } from "@/types/product-types/bus/core/images.types";
import { BusVehicleImage } from "@/types/product-types/bus/vehicle/image.types";
import { AirportTransferVehicleImage } from "@/types/product-types/airport-transfer/vehicle/vehicle-image.types";
import { FlyImage } from "@/types/product-types/ticket-fly/core/image.types";
import { FlyAirlineImage } from "@/types/product-types/references/airline/image.types";
import { FlyAircraftImage } from "@/types/product-types/references/airline/aircraft/image.types";

export interface MediaCategory {
  id: string;

  name: string;
  slug: string;
  description?: string | null;
  icon?: string | null;
  sortOrder: number;
  active: boolean;

  bookingTypeIds: string[];
  bookingTypes?: BookingType[];

  hotelMedias?: HotelMedia[];
  roomMedias?: RoomMedia[];

  yachtImages?: YachtImage[];
  yachtVehicleImages?: YachtVehicleImage[];

  carRentalMedias?: CarRentalMedia[];
  carRentalVehicleMedias?: CarRentalVehicleMedia[];

  busImages?: BusImage[];
  busVehicleImages?: BusVehicleImage[];

  airportTransferVehicleImages?: AirportTransferVehicleImage[];

  flyImages?: FlyImage[];
  flyAirlineImages?: FlyAirlineImage[];
  flyAircraftImages?: FlyAircraftImage[];

  createdAt: Date;
  updatedAt: Date;
}
