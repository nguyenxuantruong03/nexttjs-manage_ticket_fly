import { Address } from "./address";
import { City } from "./city";
import { Ward } from "./ward";

export interface District {
  id: string;

  cityId: string;
  city?: City;

  code?: string | null;
  name: string;
  nativeName?: string | null;

  latitude?: number | null;
  longitude?: number | null;

  addresses?: Address[];
  wards?: Ward[];

  createdAt: Date;
  updatedAt: Date;
}
