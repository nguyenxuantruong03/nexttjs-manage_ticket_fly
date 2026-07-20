import { CarRentalExtraPricingType } from "../enums";

export interface CarRentalExtraPrice {
  id: string;

  extraId: string;

  pricingType: CarRentalExtraPricingType;

  amount: number;


  minimumQuantity?: number;

  maximumQuantity?: number;

  startDate?: string;

  endDate?: string;

  createdAt: string;
}