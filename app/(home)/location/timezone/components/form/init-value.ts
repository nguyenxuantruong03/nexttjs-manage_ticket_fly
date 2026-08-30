import { Timezone } from "@/types/location/timezone";

import { timezoneDefaultValues } from "./default-values";

import { TimezoneFormSchema } from "./schema";

export function initTimezoneFormValues(
  timezone?: Timezone,
): TimezoneFormSchema {
  if (!timezone) {
    return structuredClone(timezoneDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: timezone.name ?? "",
    displayName: timezone.displayName ?? null,
    abbreviation: timezone.abbreviation ?? null,
    utcOffset: timezone.utcOffset ?? "",
    utcOffsetMinutes: timezone.utcOffsetMinutes ?? 0,
    daylightSaving: timezone.daylightSaving ?? false,

    // ======================================================
    // STATUS
    // ======================================================

    active: timezone.active ?? true,
  };
}
