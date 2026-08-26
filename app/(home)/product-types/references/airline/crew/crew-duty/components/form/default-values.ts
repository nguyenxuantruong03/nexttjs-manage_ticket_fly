import { FlyCrewDutyFormSchema } from "./schema";

export const flyCrewDutyDefaultValues: FlyCrewDutyFormSchema = {
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
