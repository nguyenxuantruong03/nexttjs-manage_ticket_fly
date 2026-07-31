import { BathroomTypeFormSchema } from "./schema";

export const bathroomTypeDefaultValues: BathroomTypeFormSchema = {
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