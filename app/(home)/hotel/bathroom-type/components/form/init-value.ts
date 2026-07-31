import { BathroomType } from "@/types/bookings/hotel/room/room.types";
import { bathroomTypeDefaultValues } from "./default-values";
import { BathroomTypeFormSchema } from "./schema";

export function initBathroomTypeFormValues(
  bathroomType: BathroomType,
): BathroomTypeFormSchema {
  if (!bathroomType) {
    return structuredClone(bathroomTypeDefaultValues);
  }

  return structuredClone(bathroomType);
}
