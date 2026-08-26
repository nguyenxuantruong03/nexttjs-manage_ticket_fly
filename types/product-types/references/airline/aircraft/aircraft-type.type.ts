import { FlyCrewQualification } from "../crew/qualification.types";

export interface FlyAircraftType {
  id: string;

  name: string;

  code: string;

  description?: string;

  manufacturer?: string;

  active: boolean;

  sortOrder: number;

  qualifications?: FlyCrewQualification[];

  createdAt: Date;

  updatedAt: Date;
}
