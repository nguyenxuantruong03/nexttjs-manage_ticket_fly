import { YachtCrewRole } from "../enums";

export interface YachtCrew {
  id: string;

  yachtId: string;

  name: string;

  role: YachtCrewRole;

  avatar?: string | null;

  experienceYears?: number | null;

  languages: string[];
}
