import { HotelPolicyMapper } from "@/types/product-types/hotel/policy-mapper";

import { BookingType } from "../../commerce/booking-type";
import { PolicyType } from "./policy-type";

import { HotelRatePlanPolicy } from "@/types/product-types/hotel/pricing/rate-plan.types";

import { YachtPolicyMapper } from "@/types/product-types/yacht/policies/policies.types";

import { BusPolicyMapper } from "@/types/product-types/bus/policy-mapper";

import { AirportTransferPolicyMapper } from "@/types/product-types/airport-transfer/airport-transfer-policy-mapper";

import { FlyPolicyMapper } from "@/types/product-types/ticket-fly/policies/policies.types";

import { CarRentalPolicyMapper } from "@/types/product-types/car_rental/policies/policies.types";

export interface Policy {
  id: string;

  // ======================================================
  // BASIC
  // ======================================================

  name: string;

  slug: string;

  description?: string | null;

  icon?: string | null;

  // ======================================================
  // POLICY TYPE
  // ======================================================

  typeId: string;

  type?: PolicyType;

  // ======================================================
  // BOOKING TYPE
  // ======================================================

  bookingTypeId: string;

  bookingType?: BookingType;

  // ======================================================
  // PRODUCT RELATIONS
  // ======================================================

  hotels?: HotelPolicyMapper[];

  rateplans?: HotelRatePlanPolicy[];

  yachts?: YachtPolicyMapper[];

  buses?: BusPolicyMapper[];

  airportTransfers?: AirportTransferPolicyMapper[];

  flies?: FlyPolicyMapper[];

  carRentals?: CarRentalPolicyMapper[];

  // ======================================================
  // STATUS
  // ======================================================

  active: boolean;

  sortOrder: number;

  // ======================================================
  // TIMESTAMPS
  // ======================================================

  createdAt: Date;
  updatedAt: Date;
}
