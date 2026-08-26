import { ContinentFormSchema } from "@/app/(home)/location/continent/components/form/schema";

import { continentDefaultValues } from "./default-values";
import { Continent } from "@/types/location/country/continent.type";

export function initContinentFormValues(
  continent?: Continent,
): ContinentFormSchema {
  if (!continent) {
    return structuredClone(continentDefaultValues);
  }

  return structuredClone(continent);
}
