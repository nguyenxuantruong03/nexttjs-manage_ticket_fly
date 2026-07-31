import { TimezoneFormSchema } from "./schema";

export const timezoneDefaultValues: TimezoneFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  name: "",

  displayName: "",

  abbreviation: "",

  utcOffset: "",

  utcOffsetMinutes: 0,

  daylightSaving: false,

  // ======================================================
  // STATUS
  // ======================================================

  active: true,
};
