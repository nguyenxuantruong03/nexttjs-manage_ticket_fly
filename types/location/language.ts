import type { Country } from "./country/country";

export interface Language {
  id: string;

  // =========================
  // BASIC
  // =========================
  code: string;
  iso3?: string | null;
  locale: string;
  name: string;
  nativeName: string;
  flagEmoji?: string | null;
  rtl: boolean;

  // =========================
  // STATUS
  // =========================
  active: boolean;
  default: boolean;

  // =========================
  // RELATIONS
  // =========================
  countries?: Country[];

  // =========================
  // TIMESTAMP
  // =========================
  createdAt: string;
  updatedAt: string;
}
