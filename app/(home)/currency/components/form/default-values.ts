import { CurrencyFormSchema } from "./schema";

export const currencyDefaultValues: CurrencyFormSchema = {
  // ======================================================
  // BASIC
  // ======================================================

  code: "",

  numericCode: "",

  symbol: "",

  symbolNative: "",

  name: "",

  nativeName: "",

  decimalDigits: 2,

  rounding: 0,

  // ======================================================
  // DISPLAY
  // ======================================================

  flagEmoji: "",

  locale: "",

  // ======================================================
  // STATUS
  // ======================================================

  active: true,

  isDefault: false,
};
