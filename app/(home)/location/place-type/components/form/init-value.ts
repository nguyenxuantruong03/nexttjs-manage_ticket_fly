import { PlaceType } from "@/types/location/place/place-type.type";
import { placeTypeDefaultValues } from "./default-values";
import { PlaceTypeFormSchema } from "./schema";

export function initPlaceTypeFormValues(placeType?: PlaceType): PlaceTypeFormSchema {
  if (!placeType) {
    return structuredClone(placeTypeDefaultValues);
  }

  return structuredClone(placeType);
}
