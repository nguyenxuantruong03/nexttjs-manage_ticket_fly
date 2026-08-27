import { z } from "zod";

import { Gender } from "@/types/common/enums";

import { FlyCrewQualificationSchema } from "./qualification.schema";
import { FlyCrewAssignmentSchema } from "./assignment.schema";
import { FlyCrewScheduleSchema } from "./schedule.schema";

// ======================================================
// CREW
// ======================================================

export const FlyCrewSchema = z.object({
  // ======================================================
  // RELATIONS
  // ======================================================

  airlineId: z.string(),

  roleId: z.string(),

  // ======================================================
  // EMPLOYEE
  // ======================================================

  employeeNumber: z.string().optional(),

  firstName: z.string().min(1),

  lastName: z.string().min(1),

  gender: z.nativeEnum(Gender).optional(),

  birthDate: z.date().optional(),

  nationality: z.string().optional(),

  // ======================================================
  // CONTACT
  // ======================================================

  email: z.string().email().optional(),

  phone: z.string().optional(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),

  // ======================================================
  // QUALIFICATIONS
  // ======================================================

  qualifications: z.array(FlyCrewQualificationSchema).optional(),

  // ======================================================
  // ASSIGNMENTS
  // ======================================================

  assignments: z.array(FlyCrewAssignmentSchema).optional(),

  // ======================================================
  // SCHEDULE
  // ======================================================

  crewSchedule: z.array(FlyCrewScheduleSchema).optional(),
});

export type FlyCrewFormSchema = z.infer<typeof FlyCrewSchema>;
