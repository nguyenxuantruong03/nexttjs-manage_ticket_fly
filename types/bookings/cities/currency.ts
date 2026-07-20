import { Country } from "./country";

export type Currency = {
  id: string;

  // ======================================================
  // BASIC
  // ======================================================

  code: string;

  numericCode?: string | null;

  symbol?: string | null;

  symbolNative?: string | null;

  name: string;

  nativeName?: string | null;

  decimalDigits: number;

  rounding: number;

  // ======================================================
  // DISPLAY
  // ======================================================

  flagEmoji?: string | null;

  locale?: string | null;

  // ======================================================
  // STATUS
  // ======================================================

  active: boolean;

  isDefault: boolean;

  countries: Country[];

  // ======================================================
  // TIMESTAMPS
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
};
