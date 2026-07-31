import type { City } from "./city";
import type { Country } from "./country";

export interface Timezone {
  id: string;

  // =========================
  // BASIC
  // =========================
  name: string;
  displayName?: string | null;
  abbreviation?: string | null;
  utcOffset: string;
  utcOffsetMinutes: number;
  daylightSaving: boolean;

  // =========================
  // STATUS
  // =========================
  active: boolean;

  // =========================
  // RELATIONS
  // =========================
  countries?: Country[];
  cities?: City[];

  // =========================
  // TIMESTAMP
  // =========================
  createdAt: string;
  updatedAt: string;
}
