import { z } from "zod";

import { Gender } from "@/types/common/enums";

import { FlyCrewRole } from "@/types/bookings/ticket-fly/enums";

import { FlyCrewQualificationSchema } from "./qualification.schema";
import { FlyCrewScheduleSchema } from "./schedule.schema";
import { FlyCrewAssignmentSchema } from "./assignment.schema";

export const FlyCrewSchema = z.object({
  airlineId: z.string(),

  employeeNumber: z.string().optional(),

  firstName: z.string(),

  lastName: z.string(),

  gender: z.nativeEnum(Gender).optional(),

  birthDate: z.date().optional(),

  nationality: z.string().optional(),

  role: z.nativeEnum(FlyCrewRole),

  email: z.string().email().optional(),

  phone: z.string().optional(),

  active: z.boolean(),

  qualifications: z.array(FlyCrewQualificationSchema).optional(),

  assignments: z.array(FlyCrewAssignmentSchema).optional(),

  crewSchedule: z.array(FlyCrewScheduleSchema).optional(),
});

export type FlyCrewFormValues = z.infer<typeof FlyCrewSchema>;
