import { Extra } from "@/types/common/commerce/extra/extra.type";

import { Bus } from "./core/bus.types";
import { BusBookingExtra } from "./booking/booking-extra.type";

export interface BusExtraMapper {
  id: string;

  // ======================================================
  // BUS
  // ======================================================

  busId: string;
  bus: Bus;

  // ======================================================
  // EXTRA
  // ======================================================

  extraId: string;
  extra: Extra;

  // ======================================================
  // BOOKING EXTRAS
  // ======================================================

  busBookingExtra: BusBookingExtra[];

  // ======================================================
  // STATUS
  // ======================================================

  active: boolean;

  sortOrder: number;

  // ======================================================
  // TIMESTAMPS
  // ======================================================

  createdAt: string;

  updatedAt: string;
}