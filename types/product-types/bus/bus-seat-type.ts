import { BusPriceBreakdown } from "./pricing/breakdown.types";
import { BusSeatPrice } from "./pricing/seat-price.types";
import { BusSeat } from "./vehicle/seat.types";

export interface BusSeatType {
  id: string;

  name: string;

  slug: string;

  description: string | null;

  icon: string | null;

  sortOrder: number;

  active: boolean;

  seats: BusSeat[];
  priceBreakdowns: BusPriceBreakdown[];
  seatPrices: BusSeatPrice[];

  createdAt: string;

  updatedAt: string;
}