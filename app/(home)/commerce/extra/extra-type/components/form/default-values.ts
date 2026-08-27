import { ExtraTypeFormSchema } from "./schema";

export const extraTypeDefaultValues: ExtraTypeFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",
  description: null,
  icon: null,
  bookingTypeIds: [],
  // ======================================================
  // STATUS
  // ======================================================

  active: true,
  sortOrder: 0,
};