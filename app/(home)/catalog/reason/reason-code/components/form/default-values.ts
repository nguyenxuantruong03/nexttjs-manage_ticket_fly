import { ReasonCodeFormSchema } from "./schema";

export const reasonCodeDefaultValues: ReasonCodeFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  code: "",

  title: "",

  description: null,

  // ======================================================
  // CONTEXT
  // ======================================================

  contextId: "",

  // ======================================================
  // STATUS
  // ======================================================

  severity: 1,

  isActive: true,
};
