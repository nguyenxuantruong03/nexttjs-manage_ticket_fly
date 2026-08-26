import { RentalDurationType } from "../enums";
import { CarRentalExtraFee } from "./extra-fee.type";

import { CarRentalPrice } from "./price.types";

export interface CarRentalPriceBreakdown {
  id: string;

  // ======================================================
  // RELATION
  // ======================================================

  priceId: string;
  price: CarRentalPrice;

  // ======================================================
  // RENTAL
  // ======================================================

  // Giá thuê thực tế
  rentalRate: number;

  // Số giờ/ngày thuê thực tế
  duration: number;
  durationType: RentalDurationType;

  // ======================================================
  // REQUIRED FEES
  // ======================================================

  taxes: number;

  serviceFee: number;

  extraFees: CarRentalExtraFee[];

  // ======================================================
  // INSURANCE
  // ======================================================

  insuranceFee: number;

  // ======================================================
  // ADDITIONAL SERVICES
  // ======================================================

  deliveryFee: number;

  extraDriverFee: number;

  childSeatFee: number;

  gpsFee: number;

  helmetFee: number;

  // ======================================================
  // DISCOUNT
  // ======================================================

  discount: number;

  // ======================================================
  // INCLUDED ITEMS
  // ======================================================

  includedItems: string[];
}
