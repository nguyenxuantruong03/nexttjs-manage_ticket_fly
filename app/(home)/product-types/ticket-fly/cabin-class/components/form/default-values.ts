import { FlyCabinClassFormSchema } from "./schema";

export const flyCabinClassDefaultValues: FlyCabinClassFormSchema = {
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
