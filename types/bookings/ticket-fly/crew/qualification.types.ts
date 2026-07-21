import { FlyCrew } from "./crew.types";


export interface FlyCrewQualification {
  id: string;

  crewId: string;

  crew?: FlyCrew;

  aircraftType: string;

  validUntil?: Date;

  issuedAt?: Date;
}