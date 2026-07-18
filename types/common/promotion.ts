import { User } from "../bookings/auth/users";

export enum PromotionTargetType {
  ALL = "all",
  HOTEL = "hotel",
  FLIGHT = "flight",
  BUS = "bus",
  TRANSFER = "transfer",
  CAR_RENTAL = "car_rental",
  YACHT = "yacht",
}

export enum PromotionStatus {
  DRAFT = "draft",
  ACTIVE = "active",
  PAUSED = "paused",
  EXPIRED = "expired",
}

export enum DiscountType {
  PERCENTAGE = "percentage",
  FIXED_AMOUNT = "fixed_amount",
}

export enum PromotionReferenceType {
  HOTEL_BOOKING = "HOTEL_BOOKING",
  BUS_BOOKING = "BUS_BOOKING",
  CAR_RENTAL_BOOKING = "CAR_RENTAL_BOOKING",
  TRANSFER_BOOKING = "TRANSFER_BOOKING",
  FLIGHT_BOOKING = "FLIGHT_BOOKING",
  YACHT_BOOKING = "YACHT_BOOKING",
}

export interface Promotion {
  id: string;

  name: string;

  description?: string;

  code?: string;

  target: PromotionTargetType;

  status: PromotionStatus;

  startDate: string;

  endDate: string;

  usageLimit?: number;

  usedCount: number;

  rules: PromotionRule[];

  usages: PromotionUsage[];

  createdAt: string;

  updatedAt: string;
}

export interface PromotionRule {
  id: string;

  promotionId: string;
  promotion?: Promotion;

  discountType: DiscountType;

  value: number;

  maxDiscount?: number;

  minimumAmount?: number;

  maximumAmount?: number;

  createdAt: string;
}

export interface PromotionUsage {
  id: string;

  promotionId: string;
  promotion?: Promotion;

  userId: string;
  user?: User;

  referenceId?: string;

  referenceType?: PromotionReferenceType;

  discountAmount: number;

  createdAt: string;
}
