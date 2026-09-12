import { MediaCategoryFormSchema } from "./schema";

export const mediaCategoryDefaultValues: MediaCategoryFormSchema = {
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
