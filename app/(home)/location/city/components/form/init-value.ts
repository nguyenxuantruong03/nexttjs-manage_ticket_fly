import { CityFormSchema } from "@/app/(home)/location/city/components/form/schema";
import { cityDefaultValues } from "./default-values";
import { City } from "@/types/location/city";

export function initCityFormValues(city?: City): CityFormSchema {
  if (!city) {
    return structuredClone(cityDefaultValues);
  }

  return structuredClone(city);
}
