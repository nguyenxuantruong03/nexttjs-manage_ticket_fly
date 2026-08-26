import { BedType } from "@/types/product-types/hotel/room/room.types";
import { bedTypeDefaultValues } from "./default-values";
import { BedTypeFormSchema } from "./schema";

export function initBedTypeFormValues(bedType: BedType): BedTypeFormSchema {
  if (!bedType) {
    return structuredClone(bedTypeDefaultValues);
  }

  return structuredClone(bedType);
}
