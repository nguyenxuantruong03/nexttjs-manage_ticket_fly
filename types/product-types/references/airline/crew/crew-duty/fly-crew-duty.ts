import { FlyCrewAssignment } from "../assignment.types";
import { FlyCrewSchedule } from "../schedule.types";

export interface FlyCrewDuty {
  id: string;

  name: string;
  slug: string;
  description?: string;
  icon?: string;
  sortOrder: number;
  active: boolean;

  assignments?: FlyCrewAssignment[];
  schedules?: FlyCrewSchedule[];

  createdAt: Date;
  updatedAt: Date;
}
