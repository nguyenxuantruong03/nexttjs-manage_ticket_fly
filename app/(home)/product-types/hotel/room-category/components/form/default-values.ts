import { RoomCategoryFormSchema } from "./schema";

export const roomCategoryDefaultValues: RoomCategoryFormSchema = {
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
