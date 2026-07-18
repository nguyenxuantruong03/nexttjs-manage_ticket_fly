import { BusSeatType } from "../enums";

export interface BusPriceBreakdown {
  id: string;

  priceId: string;

  seatType: BusSeatType;

  basePrice: number;

  originalPrice?: number;

  taxes: number;

  serviceFee: number;

  bookingFee: number;

  discount: number;

  finalPrice: number;

  availableSeats?: number;

  includedItems: string[];

  createdAt: string;

  updatedAt: string;
}