import { PriceCalculationType } from "../../enums";
import { BookingType } from "../booking-type";
import { Promotion } from "./promotion";

export interface PromotionRule {
  id: string;

  promotionId: string;
  promotion?: Promotion;

  bookingTypeId: string;
  bookingType?: BookingType;

  discountType: PriceCalculationType;

  value: number;
  maxDiscount?: number | null;
  minimumAmount?: number | null;
  maximumAmount?: number | null;

  createdAt: Date;
}
