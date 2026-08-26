import { PolicyTypeFormSchema } from "./schema";

export const policyTypeDefaultValues: PolicyTypeFormSchema = {
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
