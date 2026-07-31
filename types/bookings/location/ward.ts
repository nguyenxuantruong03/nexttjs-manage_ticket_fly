import type { Address } from "./address";
import type { District } from "./district";

export interface Ward {
  id: string;

  // =========================
  // RELATION
  // =========================
  districtId: string;
  district?: District;

  // =========================
  // BASIC
  // =========================
  code?: string | null;
  name: string;
  nativeName?: string | null;

  // =========================
  // LOCATION
  // =========================
  latitude?: number | null;
  longitude?: number | null;

  // =========================
  // RELATIONS
  // =========================
  addresses?: Address[];

  // =========================
  // TIMESTAMP
  // =========================
  createdAt: string;
  updatedAt: string;
}
