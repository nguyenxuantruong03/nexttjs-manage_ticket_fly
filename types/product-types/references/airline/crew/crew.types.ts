import { Gender } from "@/types/common/enums";

import { FlyCrewAssignment } from "./assignment.types";
import { FlyCrewQualification } from "./qualification.types";
import { FlyCrewSchedule } from "./schedule.types";
import { FlyAirline } from "../airline.types";
import { FlyCrewRole } from "./crew-role/fly-crew-role";

export interface FlyCrew {
  id: string;

  airlineId: string;
  airline?: FlyAirline;

  employeeNumber?: string;

  firstName: string;
  lastName: string;

  gender?: Gender;

  birthDate?: Date;

  nationality?: string;

  // Master FlyCrewRole
  roleId: string;
  role?: FlyCrewRole;

  email?: string;
  phone?: string;

  active: boolean;

  qualifications?: FlyCrewQualification[];
  assignments?: FlyCrewAssignment[];
  crewSchedule?: FlyCrewSchedule[];

  createdAt: Date;
  updatedAt: Date;
}
