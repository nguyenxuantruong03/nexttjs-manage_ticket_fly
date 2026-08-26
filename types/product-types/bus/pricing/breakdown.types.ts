import { BusSeatType } from "../bus-seat-type";
import { BusExtraFee } from "./extra-fee.type";

import { BusPrice } from "./price.types";

export interface BusPriceBreakdown {
  id: string;

  // ======================================================
  // RELATIONS
  // ======================================================

  priceId: string;
  price: BusPrice;

  seatTypeId: string;
  seatType: BusSeatType;

  extraFees: BusExtraFee[];

  // ======================================================
  // PRICE
  // ======================================================

  basePrice: number;

  originalPrice: number | null;

  taxes: number;

  serviceFee: number;

  bookingFee: number;

  discount: number;

  finalPrice: number;

  availableSeats: number | null;

  includedItems: string[];

  // ======================================================
  // TIMESTAMPS
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
}
