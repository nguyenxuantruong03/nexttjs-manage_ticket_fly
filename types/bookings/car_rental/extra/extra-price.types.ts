import { Currency } from "@/types/common/enums";
import { CarRentalExtraPricingType } from "../enums";

export interface CarRentalExtraPrice {
  id: string;

  extraId: string;

  pricingType: CarRentalExtraPricingType;

  amount: number;

  currency: Currency;

  minimumQuantity?: number;

  maximumQuantity?: number;

  startDate?: string;

  endDate?: string;

  createdAt: string;
}