import { FlyDelayReasonFormSchema } from "./schema";

export const flyDelayReasonDefaultValues: FlyDelayReasonFormSchema = {
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
