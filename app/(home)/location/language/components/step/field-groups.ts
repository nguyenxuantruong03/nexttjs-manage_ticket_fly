import { FieldPath } from "react-hook-form";
import { LanguageFormSchema } from "../form/schema";

type LanguageFieldPath = FieldPath<LanguageFormSchema>;

export const languageFieldGroups: Record<
  string,
  readonly LanguageFieldPath[]
> = {
  // ======================================================
  // BASIC
  // ======================================================

  basic: [
    "code",
    "iso3",
    "locale",
    "name",
    "nativeName",
    "flagEmoji",
    "rtl",
  ],

  // ======================================================
  // STATUS
  // ======================================================

  status: [
    "active",
    "default",
  ],
};