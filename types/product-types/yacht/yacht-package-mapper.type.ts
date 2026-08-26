import { Package } from "@/types/common/commerce/package/package.type";
import { Yacht } from "./core/yacht.types";
import { YachtBooking } from "./booking/booking.types";

export interface YachtPackageMapper {
  id: string;

  // ======================================================
  // YACHT
  // ======================================================

  yachtId: string;
  yacht: Yacht;

  // ======================================================
  // PACKAGE
  // ======================================================

  packageId: string;
  package: Package;

  // ======================================================
  // BOOKING
  // ======================================================

  yachtBooking: YachtBooking[];

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: Date;
}
