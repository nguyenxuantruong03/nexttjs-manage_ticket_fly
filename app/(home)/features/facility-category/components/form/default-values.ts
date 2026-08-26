import { FacilityCategoryFormSchema } from "./schema";

export const facilityCategoryDefaultValues: FacilityCategoryFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",
  description: null,
  icon: null,
  bookingTypeId: '',
  // ======================================================
  // STATUS
  // ======================================================

  active: true,
  sortOrder: 0,
};