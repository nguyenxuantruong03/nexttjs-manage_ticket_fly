import { PlaceFormSchema } from "@/app/(home)/location/place/components/form/schema";
import { Place } from "@/types/bookings/location/place";
import { placeDefaultValues } from "./default-values";

export function initPlaceFormValues(place?: Place): PlaceFormSchema {
  if (!place) {
    return structuredClone(placeDefaultValues);
  }

  return structuredClone(place);
}
