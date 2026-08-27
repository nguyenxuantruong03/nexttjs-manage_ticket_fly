import { BookingType } from "@/types/common/commerce/booking-type";

import { AirportTransferExtraMapper } from "@/types/product-types/airport-transfer/airportTransfer-extra-mapper.type";
import { ExtraImage } from "./extra-image.type";
import { Currency } from "@/types/location/currency";
import { PackageExtra } from "../package/package-extra.type";
import { YachtExtraMapper } from "@/types/product-types/yacht/yacht-extra-mapper.type";
import { HotelExtraMapper } from "@/types/product-types/hotel/hotel-extra-mapper.type";
import { BusExtraMapper } from "@/types/product-types/bus/bus-extra-mapper.type";
import { CarRentalExtraMapper } from "@/types/product-types/car_rental/carRental-extra-mapper.type";
import { FlyExtraMapper } from "@/types/product-types/ticket-fly/fly-extra-mapper.type";
import { ExtraType } from "./extra-type.type";

export interface Extra {
  id: string;

  bookingTypeIds: string[];
  bookingTypes?: BookingType[];

  typeId: string;
  type: ExtraType;

  name: string;
  slug: string;

  description: string | null;
  icon: string | null;

  price: number;

  currencyId: string;
  currency: Currency;

  active: boolean;
  sortOrder: number;

  images: ExtraImage[];

  packageExtras: PackageExtra[];

  yachtMappers: YachtExtraMapper[];

  hotelMappers: HotelExtraMapper[];

  carRentalMappers: CarRentalExtraMapper[];

  busMappers: BusExtraMapper[];

  airportTransferMappers: AirportTransferExtraMapper[];

  flyMappers: FlyExtraMapper[];

  createdAt: Date;
  updatedAt: Date;
}
