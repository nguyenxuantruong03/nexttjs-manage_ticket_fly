import { PlaceFormSchema } from "@/app/(home)/location/place/components/form/schema";
import { placeDefaultValues } from "./default-values";
import { Place } from "@/types/location/place/place";

export function initPlaceFormValues(place?: Place): PlaceFormSchema {
  if (!place) {
    return structuredClone(placeDefaultValues);
  }

  return structuredClone(place);
}
