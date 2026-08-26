import { ExtraTypeFormSchema } from "./schema";

export const extraTypeDefaultValues: ExtraTypeFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",
  description: null,
  icon: null,
  bookingTypeId: "",
  // ======================================================
  // STATUS
  // ======================================================

  active: true,
  sortOrder: 0,
};