import { Ward } from "@/types/bookings/location/ward";
import { wardDefaultValues } from "./default-values";
import { WardFormSchema } from "./schema";

export function initwardFormValues(ward: Ward): WardFormSchema {
  if (!ward) {
    return structuredClone(wardDefaultValues);
  }

  return structuredClone(ward);
}
