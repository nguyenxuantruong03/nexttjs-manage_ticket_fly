import { ServiceTypeFormSchema } from "./schema";

export const serviceTypeDefaultValues: ServiceTypeFormSchema = {
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

  active: true,

  sortOrder: 0,
};