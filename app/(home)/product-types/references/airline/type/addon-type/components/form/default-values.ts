import { FlyAddonTypeFormSchema } from "./schema";

export const flyAddonTypeDefaultValues: FlyAddonTypeFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",

  description: "",

  icon: "",

  // ======================================================
  // STATUS
  // ======================================================

  sortOrder: 0,

  active: true,
};