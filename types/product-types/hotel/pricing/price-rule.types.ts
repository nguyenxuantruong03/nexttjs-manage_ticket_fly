import { WeekDay } from "@/types/common/enums";
import { PriceRuleType } from "@/types/common/commerce/price-rule-type.type";
import { HotelPriceAdjustmentType } from "../enum/enums";
import { HotelRoomPrice } from "./price.types";

export interface HotelRoomPriceRule {
  id: string;

  priceId: string;
  price: HotelRoomPrice;

  name: string | null;

  priceRuleTypeId: string;
  priceRuleType: PriceRuleType;

  adjustmentType: HotelPriceAdjustmentType;

  value: number;

  minimumNights: number | null;
  maximumNights: number | null;

  validFrom: Date | null;
  validTo: Date | null;

  daysOfWeek: WeekDay[];

  priority: number;
  combinable: boolean;
  active: boolean;

  createdAt: Date;
  updatedAt: Date;
}