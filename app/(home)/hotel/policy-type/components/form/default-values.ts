import { PolicyTypeFormSchema } from "./schema";

export const policyTypeDefaultValues: PolicyTypeFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",

  description: "",

  icon: "",

  // ======================================================
  // SETTINGS
  // ======================================================

  active: true,

  sortOrder: 0,
};
