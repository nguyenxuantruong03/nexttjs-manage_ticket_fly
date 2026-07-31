import { CountryFormSchema } from "@/app/(home)/location/country/components/form/schema";
import { Country } from "@/types/bookings/location/country";
import { countryDefaultValues } from "./default-values";

export function initCountryFormValues(country?: Country): CountryFormSchema {
  if (!country) {
    return structuredClone(countryDefaultValues);
  }

  return structuredClone(country);
}
