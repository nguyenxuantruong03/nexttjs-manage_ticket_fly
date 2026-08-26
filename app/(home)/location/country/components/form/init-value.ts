import { CountryFormSchema } from "@/app/(home)/location/country/components/form/schema";
import { countryDefaultValues } from "./default-values";
import { Country } from "@/types/location/country/country";

export function initCountryFormValues(country?: Country): CountryFormSchema {
  if (!country) {
    return structuredClone(countryDefaultValues);
  }

  return structuredClone(country);
}
