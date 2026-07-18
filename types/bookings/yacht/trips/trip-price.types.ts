import { Currency } from "@/types/common/enums";

export interface YachtTripPrice {
  id: string;

  tripId: string;

  currency: Currency;

  amount: number;

  originalAmount?: number | null;

  tax: number;

  serviceFee: number;

  discount: number;

  finalAmount: number;

  createdAt: Date;
}