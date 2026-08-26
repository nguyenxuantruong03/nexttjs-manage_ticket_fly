import { Extra } from "../common/commerce/extra/extra.type";
import { Package } from "../common/commerce/package/package.type";
import { Country } from "./country/country";

export type Currency = {
  id: string;

  // ======================================================
  // BASIC
  // ======================================================

  code: string;

  numericCode: string | null;

  symbol: string | null;

  symbolNative: string | null;

  name: string;

  nativeName: string | null;

  decimalDigits: number;

  rounding: number;

  // ======================================================
  // DISPLAY
  // ======================================================

  flagEmoji: string | null;

  locale: string | null;

  // ======================================================
  // STATUS
  // ======================================================

  active: boolean;

  isDefault: boolean;

  // ======================================================
  // RELATIONS
  // ======================================================

  countries: Country[];

  extra: Extra[];
  package: Package[];

  // ======================================================
  // MEDIA
  // ======================================================

  thumbnail?: string;
  coverImage?: string;
  bannerImage?: string;
  images: string[];
  video?: string;

  // ======================================================
  // TIMESTAMPS
  // ======================================================

  createdAt: Date;

  updatedAt: Date;
};
