import { Extra } from "@/types/common/commerce/extra/extra.type";
import { FlyBookingExtra } from "./booking/booking-extra.type";
import { Fly } from "./core/fly.types";

export interface FlyExtraMapper {
  id: string;

  // ======================================================
  // RELATIONS
  // ======================================================

  flyId: string;
  fly: Fly;

  extraId: string;
  extra: Extra;

  flyBookingExtra: FlyBookingExtra[];

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
