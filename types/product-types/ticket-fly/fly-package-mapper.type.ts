import { Fly } from "./core/fly.types";
import { FlyBooking } from "./booking/booking.types";
import { Package } from "@/types/common/commerce/package/package.type";

export interface FlyPackageMapper {
  id: string;

  // ======================================================
  // RELATIONS
  // ======================================================

  flyId: string;
  fly: Fly;

  packageId: string;
  package: Package;

  flyBooking: FlyBooking[];

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: Date;
}
