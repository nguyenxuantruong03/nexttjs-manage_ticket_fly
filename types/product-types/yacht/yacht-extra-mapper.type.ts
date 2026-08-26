import { Extra } from "@/types/common/commerce/extra/extra.type";
import { Yacht } from "./core/yacht.types";
import { YachtBookingExtra } from "./booking/booking-extra.types";

export interface YachtExtraMapper {
  id: string;

  // ======================================================
  // YACHT
  // ======================================================

  yachtId: string;
  yacht: Yacht;

  // ======================================================
  // EXTRA
  // ======================================================

  extraId: string;
  extra: Extra;

  // ======================================================
  // BOOKING
  // ======================================================

  yachtBookingExtra: YachtBookingExtra[];

  // ======================================================
  // STATUS
  // ======================================================

  active: boolean;
  sortOrder: number;

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: Date;
  updatedAt: Date;
}
