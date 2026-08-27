import { BookingType } from "@/types/common/commerce/booking-type";

import { AirportTransferExtraFee } from "@/types/product-types/airport-transfer/pricing/extra-fee.types";
import { BusExtraFee } from "@/types/product-types/bus/pricing/extra-fee.type";
import { CarRentalExtraFee } from "@/types/product-types/car_rental/pricing/extra-fee.type";
import { HotelExtraFee } from "@/types/product-types/hotel/pricing/extra-fee.type";
import { FlyExtraFee } from "@/types/product-types/ticket-fly/pricing/extra-fee.type";
import { YachtExtraFee } from "@/types/product-types/yacht/pricing/extra-fee.type";

export interface ExtraFeeType {
  id: string;

  // ======================================================
  // BOOKING TYPE
  // ======================================================

  bookingTypeIds: string[];
  bookingTypes?: BookingType[];

  // ======================================================
  // BASIC
  // ======================================================

  name: string;

  slug: string;

  description: string | null;

  icon: string | null;

  sortOrder: number;

  // ======================================================
  // STATUS
  // ======================================================

  active: boolean;

  // ======================================================
  // RELATIONS
  // ======================================================

  airportTransferExtraFees: AirportTransferExtraFee[];

  flyExtraFees: FlyExtraFee[];

  hotelExtraFees: HotelExtraFee[];

  carRentalExtraFees: CarRentalExtraFee[];

  yachtExtraFees: YachtExtraFee[];

  busExtraFees: BusExtraFee[];

  // ======================================================
  // TIMESTAMPS
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
}
