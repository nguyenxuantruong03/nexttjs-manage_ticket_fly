import { RouteType } from "next/dist/lib/load-custom-routes";
import { FuelType } from "../catalog/fuel-type";
import { MediaAsset } from "../catalog/media-asset";
import { MediaCategory } from "../catalog/media-category";
import { VehicleType } from "../catalog/vehicle-type.type";

import { Facility } from "../features/facility/facility";
import { FacilityCategory } from "../features/facility/facility-category";

import { Policy } from "../features/policy/policy";
import { PolicyType } from "../features/policy/policy-type";

import { Payment } from "../user/payment";
import { WishlistItem } from "../user/wishlist";

import { Coupon, CouponUsage } from "./coupon";
import { ExtraFeeType } from "./extra-fee-type.type";
import { ExtraType } from "./extra/extra-type.type";
import { PriceRuleType } from "./price-rule-type.type";

import { Promotion, PromotionUsage } from "./promotion/promotion";

import { PromotionRule } from "./promotion/promotion-rule";
import { ServiceType } from "../catalog/service-type.type";
import { BookingItemType } from "./booking-item-type.type";
import { Package } from "./package/package.type";
import { Extra } from "./extra/extra.type";
import { ProviderBooking } from "@/types/users/provider-bookings";
import { SearchTag } from "@/types/searchs/search/tag.types";

export interface BookingType {
  id: string;

  code: string;

  name: string;

  description?: string | null;

  active: boolean;

  sortOrder: number;

  coupon?: Coupon[];

  fuelType?: FuelType[];

  mediaAsset?: MediaAsset[];

  mediaCategory?: MediaCategory[];

  wishistItem?: WishlistItem[];

  facility?: Facility[];

  facilityCategory?: FacilityCategory[];

  policy?: Policy[];

  policyType?: PolicyType[];

  promotion?: Promotion[];

  promotionUsage?: PromotionUsage[];

  promotionRule?: PromotionRule[];

  couponUsage?: CouponUsage[];

  vehicleType?: VehicleType[];

  priceRuleType?: PriceRuleType[];

  extraFeeType?: ExtraFeeType[];

  extraType?: ExtraType[];

  routeType?: RouteType[];

  serviceType?: ServiceType[];

  bookingItemType?: BookingItemType[];

  package?: Package[];

  extra?: Extra[];

  providerBookings?: ProviderBooking[];

  tags?: SearchTag[];

  payment?: Payment[];

  createdAt: Date;

  updatedAt: Date;
}
