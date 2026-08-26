import { Package } from "@/types/common/commerce/package/package.type";

import { Bus } from "./core/bus.types";
import { BusBooking } from "./booking/booking.types";

export interface BusPackageMapper {
  id: string;

  // ======================================================
  // BUS
  // ======================================================

  busId: string;
  bus: Bus;

  // ======================================================
  // PACKAGE
  // ======================================================

  packageId: string;
  package: Package;

  // ======================================================
  // BOOKINGS
  // ======================================================

  busBooking: BusBooking[];

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: string;
}