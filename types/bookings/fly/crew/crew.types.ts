import { Gender } from "@/types/common/enums";
import { FlyCrewRole } from "../enums";
import { FlyCrewAssignment } from "./assignment.types";
import { FlyCrewQualification } from "./qualification.types";
import { FlyCrewSchedule } from "./schedule.types";
import { FlyAirline } from "../airline/airline.types";

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

  role: FlyCrewRole;

  email?: string;

  phone?: string;

  active: boolean;

  qualifications?: FlyCrewQualification[];

  assignments?: FlyCrewAssignment[];

  crewSchedule?: FlyCrewSchedule[];

  createdAt: Date;

  updatedAt: Date;
}