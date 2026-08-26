import { FlyAircraftFormSchema } from "./schema";

export const flyAircraftDefaultValues: FlyAircraftFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  manufacturer: "",

  model: "",

  code: "",

  registrationNumber: "",

  // ======================================================
  // STATUS
  // ======================================================

  active: true,
};