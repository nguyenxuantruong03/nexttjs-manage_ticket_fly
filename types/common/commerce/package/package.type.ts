import { BookingType } from "@/types/common/commerce/booking-type";
import { PackageImage } from "./package-image.type";
import { PackageExtra } from "./package-extra.type";
import { AirportTransferPackageMapper } from "@/types/product-types/airport-transfer/airportTransfer-package-mapper.type";
import { YachtPackageMapper } from "@/types/product-types/yacht/yacht-package-mapper.type";
import { HotelPackageMapper } from "@/types/product-types/hotel/hotel-package-mapper.type";
import { BusPackageMapper } from "@/types/product-types/bus/bus-package-mapper.type";
import { CarRentalPackageMapper } from "@/types/product-types/car_rental/carRental-package-mapper.type";
import { FlyPackageMapper } from "@/types/product-types/ticket-fly/fly-package-mapper.type";
import { Currency } from "@/types/location/currency";

export enum PackageDurationType {
  MINUTE = "MINUTE",
  HOUR = "HOUR",
  DAY = "DAY",
  NIGHT = "NIGHT",
  WEEK = "WEEK",
  MONTH = "MONTH",
}

export interface Package {
  id: string;

  // ======================================================
  // BOOKING TYPE
  // ======================================================

  bookingTypeId: string;
  bookingType: BookingType;

  // ======================================================
  // BASIC
  // ======================================================

  name: string;

  slug: string;

  description: string | null;

  // ======================================================
  // DURATION
  // ======================================================

  duration: number | null;

  durationType: PackageDurationType | null;

  // ======================================================
  // CAPACITY
  // ======================================================

  maxGuests: number | null;

  // ======================================================
  // BASE PRICE
  // ======================================================

  price: number;

  currencyId: string;
  currency: Currency;

  // ======================================================
  // CONTENT
  // ======================================================

  includedItems: string[];

  // ======================================================
  // STATUS
  // ======================================================

  active: boolean;

  sortOrder: number;

  // ======================================================
  // RELATIONS
  // ======================================================

  images: PackageImage[];

  packageExtra: PackageExtra[];

  yachtMappers: YachtPackageMapper[];

  hotelMappers: HotelPackageMapper[];

  busMappers: BusPackageMapper[];

  carRentalMappers: CarRentalPackageMapper[];

  flyMappers: FlyPackageMapper[];

  airportTransferMappers: AirportTransferPackageMapper[];

  // ======================================================
  // TIMESTAMPS
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
}
