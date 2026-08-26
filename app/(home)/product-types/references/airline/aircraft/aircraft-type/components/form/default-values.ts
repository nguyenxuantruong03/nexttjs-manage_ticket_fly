import { FlyAircraftTypeFormSchema } from "./schema";

export const flyAircraftTypeDefaultValues: FlyAircraftTypeFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",

  code: "",

  description: "",

  manufacturer: "",

  // ======================================================
  // STATUS
  // ======================================================

  active: true,

  sortOrder: 0,
};