import { FlyCrewRoleFormSchema } from "./schema";

export const flyCrewRoleDefaultValues: FlyCrewRoleFormSchema = {
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
