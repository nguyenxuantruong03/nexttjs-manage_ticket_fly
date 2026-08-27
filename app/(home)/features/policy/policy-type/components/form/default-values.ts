import { PolicyTypeFormSchema } from "./schema";

export const policyTypeDefaultValues: PolicyTypeFormSchema = {
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
