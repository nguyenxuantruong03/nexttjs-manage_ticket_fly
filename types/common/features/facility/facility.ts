import { FacilityCategory } from "./facility-category";

import { MediaAsset } from "../../catalog/media-asset";
import { BookingType } from "../../commerce/booking-type";
import { HotelFacilityMapper } from "@/types/product-types/hotel/facility-mapper";
import { RoomFacility } from "@/types/product-types/hotel/room/room.types";
import { CarRentalVehicleFacilityMapper } from "@/types/product-types/car_rental/vehicle/vehicle-facility.types";
import {
  YachtMarinaFacilityMapper,
  YachtVehicleFacilityMapper,
} from "@/types/product-types/yacht/facilities/yacht-facilities.types";
import { BusVehicleFacilityMapper } from "@/types/product-types/bus/vehicle/facility-mapper";
import { AirportTransferVehicleFacilityMapper } from "@/types/product-types/airport-transfer/airport-transfer-vehicle-facility-mapper";
import { FlyAircraftFacilityMapper } from "@/types/product-types/references/airline/aircraft/facility-mapper.types";

export interface Facility {
  id: string;

  name: string;
  slug: string;
  description?: string | null;

  categoryId?: string | null;
  category?: FacilityCategory | null;

  icon?: string | null;

  bookingTypeIds: string[];
  bookingTypes?: BookingType[];

  hotels?: HotelFacilityMapper[];
  rooms?: RoomFacility[];
  medias?: FacilityMedia[];

  carRental?: CarRentalVehicleFacilityMapper[];

  yachtVehicles?: YachtVehicleFacilityMapper[];
  yachtMarinas?: YachtMarinaFacilityMapper[];

  busVehicles?: BusVehicleFacilityMapper[];

  airportTransferVehicles?: AirportTransferVehicleFacilityMapper[];

  flyAircrafts?: FlyAircraftFacilityMapper[];

  active: boolean;
  sortOrder: number;

  createdAt: Date;
}

export interface FacilityMedia {
  id: string;

  facilityId: string;
  facility?: Facility;

  mediaId: string;
  media?: MediaAsset;

  createdAt: Date;
}
