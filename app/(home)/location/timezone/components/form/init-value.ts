import { Timezone } from "@/types/location/timezone";
import { timezoneDefaultValues } from "./default-values";
import { TimezoneFormSchema } from "./schema";

export function initTimezoneFormValues(timezone: Timezone): TimezoneFormSchema {
  if (!timezone) {
    return structuredClone(timezoneDefaultValues);
  }

  return structuredClone(timezone);
}
