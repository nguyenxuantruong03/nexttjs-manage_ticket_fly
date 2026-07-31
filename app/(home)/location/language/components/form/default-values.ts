import { LanguageFormSchema } from "./schema";

export const languageDefaultValues: LanguageFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  code: "",

  iso3: "",

  locale: "",

  name: "",

  nativeName: "",

  flagEmoji: "",

  rtl: false,

  // ======================================================
  // STATUS
  // ======================================================

  active: true,

  default: false,
};
