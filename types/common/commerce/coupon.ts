import { User } from "@/types/users/auth/users";
import { BookingType } from "./booking-type";
import { DiscountType } from "./promotion/promotion";

export interface Coupon {
  id: string;

  code: string;
  name: string;
  description?: string | null;

  discountType: DiscountType;

  bookingTypeId: string;
  bookingType?: BookingType;

  value: number;
  maxDiscount?: number | null;
  minimumAmount?: number | null;

  active: boolean;

  startDate?: Date | null;
  endDate?: Date | null;

  usageLimit?: number | null;
  usedCount: number;

  usages?: CouponUsage[];

  createdAt: Date;
  updatedAt: Date;
}

export interface CouponUsage {
  id: string;

  couponId: string;
  coupon?: Coupon;

  userId: string;
  user?: User;

  bookingTypeId: string;
  bookingType?: BookingType;

  discountAmount: number;

  createdAt: Date;
}
