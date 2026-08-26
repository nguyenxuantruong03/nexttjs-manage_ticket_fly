import { Language } from "@/types/location/language";
import { languageDefaultValues } from "./default-values";
import { LanguageFormSchema } from "./schema";

export function initLanguageFormValues(language: Language): LanguageFormSchema {
  if (!language) {
    return structuredClone(languageDefaultValues);
  }

  return structuredClone(language);
}
