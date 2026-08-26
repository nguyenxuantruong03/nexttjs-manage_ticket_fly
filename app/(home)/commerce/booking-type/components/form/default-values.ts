import { BookingTypeFormSchema } from "./schema";

export const bookingTypeDefaultValues: BookingTypeFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  code: "",
  name: "",
  description: null,

  // ======================================================
  // STATUS
  // ======================================================

  active: true,
  sortOrder: 0,
};