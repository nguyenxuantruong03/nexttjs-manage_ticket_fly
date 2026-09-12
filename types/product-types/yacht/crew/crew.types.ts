import { Yacht } from "../core/yacht.types";
import { YachtCrewRole } from "../yacht-crew-role";

export interface YachtCrew {
  id: string;

  yachtId: string;
  yacht?: Yacht;

  name: string;

  roleId: string;
  role?: YachtCrewRole;

  avatar?: string | null;

  experienceYears?: number | null;

  languages: string[];
  active: boolean;
}
