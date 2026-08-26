import { CarRental } from "./core/car-rental.types";
import { CarRentalBookingExtra } from "./booking/booking-extra.types";
import { Extra } from "@/types/common/commerce/extra/extra.type";

export interface CarRentalExtraMapper {
  id: string;

  // ======================================================
  // RELATIONS
  // ======================================================

  carRentalId: string;
  carRental: CarRental;

  extraId: string;
  extra: Extra;

  carRentalBookingExtra: CarRentalBookingExtra[];

  // ======================================================
  // STATUS
  // ======================================================

  active: boolean;

  sortOrder: number;

  // ======================================================
  // TIMESTAMPS
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
}
