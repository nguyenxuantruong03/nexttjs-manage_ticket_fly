import { Language } from "@/types/location/language";

import { languageDefaultValues } from "./default-values";

import { LanguageFormSchema } from "./schema";

export function initLanguageFormValues(
  language?: Language,
): LanguageFormSchema {
  if (!language) {
    return structuredClone(languageDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    code: language.code ?? "",
    iso3: language.iso3 ?? null,
    locale: language.locale ?? "",
    name: language.name ?? "",
    nativeName: language.nativeName ?? "",
    flagEmoji: language.flagEmoji ?? null,
    rtl: language.rtl ?? false,

    // ======================================================
    // STATUS
    // ======================================================

    active: language.active ?? true,
    default: language.default ?? false,
  };
}