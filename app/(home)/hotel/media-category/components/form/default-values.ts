import { MediaCategoryFormSchema } from "./schema";

export const mediaCategoryDefaultValues: MediaCategoryFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",

  description: "",

  icon: "",

  // ======================================================
  // SETTINGS
  // ======================================================

  sortOrder: 0,

  active: true,
};
