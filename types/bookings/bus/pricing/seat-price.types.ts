import { BusSeatType } from "../enums";

export interface BusSeatPrice {
  id: string;

  tripPriceId: string;

  seatType: BusSeatType;

  price: number;

  originalPrice?: number;

  taxes: number;

  serviceFee: number;

  bookingFee: number;

  discount: number;

  finalPrice: number;

  availableSeats?: number;

  createdAt: string;
}