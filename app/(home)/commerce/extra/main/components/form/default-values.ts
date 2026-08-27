import { ExtraFormSchema } from "./schema";

export const extraDefaultValues: ExtraFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",

  description: null,

  icon: null,

  bookingTypeIds: [],

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
