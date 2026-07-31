import { CityFormSchema } from "@/app/(home)/location/city/components/form/schema";
import { City } from "@/types/bookings/location/city";
import { cityDefaultValues } from "./default-values";

export function initCityFormValues(city?: City): CityFormSchema {
  if (!city) {
    return structuredClone(cityDefaultValues);
  }

  return structuredClone(city);
}
