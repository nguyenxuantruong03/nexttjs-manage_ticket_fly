import { Currency, WeekDay } from "@/types/common/enums";
import { HotelPriceAdjustmentType, HotelPriceRuleType } from "../enum/enums";

export interface HotelRoomPriceRule {
  id: string;

  priceId: string;

  name?: string | null;

  type: HotelPriceRuleType;

  adjustmentType: HotelPriceAdjustmentType;

  value: number;

  currency?: Currency | null;

  minimumNights?: number | null;

  maximumNights?: number | null;

  validFrom?: Date | null;

  validTo?: Date | null;

  daysOfWeek: WeekDay[];

  priority: number;

  combinable: boolean;

  active: boolean;

  createdAt: Date;

  updatedAt: Date;
}
