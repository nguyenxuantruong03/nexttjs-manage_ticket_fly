import { FacilityCategoryFormSchema } from "./schema";

export const facilityCategoryDefaultValues: FacilityCategoryFormSchema = {
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
