import { User } from "@/types/users/auth/users";
import { BookingType } from "../booking-type";
import { PromotionRule } from "./promotion-rule";

export enum PromotionStatus {
  draft = "draft",
  active = "active",
  paused = "paused",
  expired = "expired",
}

export enum DiscountType {
  percentage = "percentage",
  fixed_amount = "fixed_amount",
}

export interface Promotion {
  id: string;

  name: string;
  description?: string | null;
  code?: string | null;

  status: PromotionStatus;

  bookingTypeIds: string[];
  bookingTypes?: BookingType[];

  startDate: Date;
  endDate: Date;

  usageLimit?: number | null;
  usedCount: number;

  rules?: PromotionRule[];
  usages?: PromotionUsage[];

  createdAt: Date;
  updatedAt: Date;
}

export interface PromotionUsage {
  id: string;

  promotionId: string;
  promotion?: Promotion;

  userId: string;
  user?: User;

  bookingTypeIds: string[];
  bookingTypes?: BookingType[];

  discountAmount: number;

  createdAt: Date;
}
