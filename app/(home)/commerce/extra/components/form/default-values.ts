import { ExtraFormSchema } from "./schema";

export const extraDefaultValues: ExtraFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",

  description: null,

  icon: null,

  bookingTypeId: "",

  typeId: "",

  // ======================================================
  // PRICING
  // ======================================================

  price: 0,

  currencyId: "",

  // ======================================================
  // STATUS
  // ======================================================

  active: true,

  sortOrder: 0,
};
