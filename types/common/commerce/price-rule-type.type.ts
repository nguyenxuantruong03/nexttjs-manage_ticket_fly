import { BookingType } from "@/types/common/commerce/booking-type";

import { AirportTransferPriceRule } from "@/types/product-types/airport-transfer/pricing/price-rule.types";
import { BusPriceRule } from "@/types/product-types/bus/pricing/rule.types";
import { CarRentalPriceRule } from "@/types/product-types/car_rental/pricing/price-rule.types";
import { HotelRoomPriceRule } from "@/types/product-types/hotel/pricing/price-rule.types";
import { FlyPriceRule } from "@/types/product-types/ticket-fly/pricing/rule.types";

import { YachtPriceRule } from "@/types/product-types/yacht/pricing/price-rule.types";

export interface PriceRuleType {
  id: string;

  bookingTypeId: string;
  bookingType?: BookingType;

  name: string;

  slug: string;

  description: string | null;

  icon: string | null;

  sortOrder: number;

  active: boolean;

  // ======================================================
  // RELATIONS
  // ======================================================

  airportTransferRules: AirportTransferPriceRule[];

  flyRules: FlyPriceRule[];

  hotelRoomRules: HotelRoomPriceRule[];

  carRentalRules: CarRentalPriceRule[];

  yachtRules: YachtPriceRule[];

  busRules: BusPriceRule[];

  // ======================================================
  // TIMESTAMPS
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
}
