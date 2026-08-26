import { FlyCrew } from "./crew.types";

export interface FlyCrewQualification {
  aircraftTypeId: string;

  validUntil?: Date;

  issuedAt?: Date;
}
