import { MediaType } from "@/types/product-types/hotel/enum/enums";

import { FacilityMedia } from "../features/facility/facility";
import { BookingType } from "../commerce/booking-type";

import { HotelMedia } from "@/types/product-types/hotel/core/hotel-media.types";
import { RoomMedia } from "@/types/product-types/hotel/room/room-media.types";
import { ReviewMedia } from "@/types/product-types/hotel/review";
import { HotelAwardMedia } from "@/types/product-types/hotel/hotel-detail";

import { YachtImage } from "@/types/product-types/yacht/core/image.types";
import { YachtVehicleImage } from "@/types/product-types/yacht/vehicles/vehicle-image.types";
import { YachtReviewImage } from "@/types/product-types/yacht/reviews/review-image.types";

import { BusImage } from "@/types/product-types/bus/core/images.types";
import { BusVehicleImage } from "@/types/product-types/bus/vehicle/image.types";
import { BusReviewImage } from "@/types/product-types/bus/reviews/review-image.types";

import { AirportTransferVehicleImage } from "@/types/product-types/airport-transfer/vehicle/vehicle-image.types";
import { AirportTransferReviewImage } from "@/types/product-types/airport-transfer/review/review-image.types";

import { FlyImage } from "@/types/product-types/ticket-fly/core/image.types";
import { ExtraImage } from "../commerce/extra/extra-image.type";
import { CarRentalMedia } from "@/types/product-types/car_rental/core/image.types";
import { CarRentalReviewMedia } from "@/types/product-types/car_rental/review/review-image.types";
import { CarRentalVehicleMedia } from "@/types/product-types/car_rental/vehicle/vehicle-image.types";
import { PackageImage } from "../commerce/package/package-image.type";
import { FlyAirlineImage } from "@/types/product-types/references/airline/image.types";
import { FlyAircraftImage } from "@/types/product-types/references/airline/aircraft/image.types";

export interface MediaAsset {
  id: string;

  // ======================================================
  // STORAGE
  // ======================================================

  url: string;

  thumbnailUrl: string | null;

  path: string | null;

  // ======================================================
  // FILE INFO
  // ======================================================

  type: MediaType;

  packageImage: PackageImage[];

  extraImage: ExtraImage[];

  bookingTypeIds: string[];
  bookingTypes?: BookingType[];

  mimeType: string | null;

  size: number | null;

  width: number | null;

  height: number | null;

  // ======================================================
  // VIDEO
  // ======================================================

  duration: number | null;

  alt: string | null;

  caption: string | null;

  // ======================================================
  // HOTEL
  // ======================================================

  hotelMedias: HotelMedia[];

  roomMedias: RoomMedia[];

  reviewMedias: ReviewMedia[];

  facilityMedias: FacilityMedia[];

  awardMedias: HotelAwardMedia[];

  // ======================================================
  // CAR RENTAL
  // ======================================================

  carRentalMedias: CarRentalMedia[];

  carRentalReviewMedias: CarRentalReviewMedia[];

  carRentalVehicleMedias: CarRentalVehicleMedia[];

  // ======================================================
  // YACHT
  // ======================================================

  yachtImages: YachtImage[];

  yachtVehicleImages: YachtVehicleImage[];

  yachtReviewImages: YachtReviewImage[];

  // ======================================================
  // BUS
  // ======================================================

  busImages: BusImage[];

  busVehicleImages: BusVehicleImage[];

  busReviewImages: BusReviewImage[];

  // ======================================================
  // AIRPORT TRANSFER
  // ======================================================

  airportTransferVehicleImages: AirportTransferVehicleImage[];

  airportTransferReviewImages: AirportTransferReviewImage[];

  // ======================================================
  // FLY
  // ======================================================

  flyImages: FlyImage[];

  flyAirlineImages: FlyAirlineImage[];

  flyAircraftImages: FlyAircraftImage[];

  // ======================================================
  // TIMESTAMPS
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
}
