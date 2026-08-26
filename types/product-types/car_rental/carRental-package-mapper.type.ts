import { CarRental } from "./core/car-rental.types";
import { CarRentalBooking } from "./booking/booking.types";
import { Package } from "@/types/common/commerce/package/package.type";

export interface CarRentalPackageMapper {
  id: string;

  // ======================================================
  // RELATIONS
  // ======================================================

  carRentalId: string;
  carRental: CarRental;

  packageId: string;
  package: Package;

  carRentalBooking: CarRentalBooking[];

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: Date;
}
