import { RegulationCategoryFormSchema } from "./schema";

export const regulationCategoryDefaultValues: RegulationCategoryFormSchema = {
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