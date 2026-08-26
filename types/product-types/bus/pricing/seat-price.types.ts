import { BusSeatType } from "../bus-seat-type";
import { BusTripPrice } from "./trip-price.types";

export interface BusSeatPrice {
  id: string;

  tripPriceId: string;
  tripPrice: BusTripPrice;

  seatTypeId: string;
  seatType: BusSeatType;

  price: number;

  originalPrice: number | null;

  taxes: number;

  serviceFee: number;

  bookingFee: number;

  discount: number;

  finalPrice: number;

  availableSeats: number | null;

  createdAt: string;
}
