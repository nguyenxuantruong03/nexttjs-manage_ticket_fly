import { FacilityFormSchema } from "./schema";

export const facilityDefaultValues: FacilityFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",
  description: null,
  icon: null,

  // ======================================================
  // CATEGORY
  // ======================================================

  categoryId: null,
  bookingTypeId: "",

  // ======================================================
  // STATUS
  // ======================================================

  active: true,
  sortOrder: 0,
};