import { RoomMediaCategoryFormSchema } from "./schema";

export const roomMediaCategoryDefaultValues: RoomMediaCategoryFormSchema = {
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