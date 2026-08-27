import { BookingItemTypeFormSchema } from "./schema";

export const bookingItemTypeDefaultValues: BookingItemTypeFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",

  description: null,

  icon: null,

  // ======================================================
  // BOOKING TYPE
  // ======================================================

  bookingTypeIds: [],

  // ======================================================
  // STATUS
  // ======================================================

  sortOrder: 0,

  active: true,
};