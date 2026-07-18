import { User } from "../bookings/auth/users";
import { DiscountType, PromotionTargetType } from "./promotion";

export enum CounponReferenceType {
  HOTEL_BOOKING = "HOTEL_BOOKING",
  BUS_BOOKING = "BUS_BOOKING",
  CAR_RENTAL_BOOKING = "CAR_RENTAL_BOOKING",
  TRANSFER_BOOKING = "TRANSFER_BOOKING",
  FLIGHT_BOOKING = "FLIGHT_BOOKING",
  YACHT_BOOKING = "YACHT_BOOKING",
}

export interface Coupon {
  id: string;

  code: string;

  name: string;

  description?: string;

  discountType: DiscountType;

  value: number;

  maxDiscount?: number;

  minimumAmount?: number;

  target: PromotionTargetType;

  active: boolean;

  startDate?: string;

  endDate?: string;

  usageLimit?: number;

  usedCount: number;

  usages: CouponUsage[];

  createdAt: string;

  updatedAt: string;
}

export interface CouponUsage {
  id: string;

  couponId: string;
  coupon?: Coupon;

  userId: string;
  user?: User;

  referenceId?: string;

  referenceType?: CounponReferenceType;

  discountAmount: number;

  createdAt: string;
}
