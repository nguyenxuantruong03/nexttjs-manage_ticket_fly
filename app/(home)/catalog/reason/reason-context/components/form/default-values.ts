import { ReasonContextFormSchema } from "./schema";

export const reasonContextDefaultValues: ReasonContextFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  code: "",

  name: "",

  description: null,

  // ======================================================
  // STATUS
  // ======================================================

  isActive: true,
};
