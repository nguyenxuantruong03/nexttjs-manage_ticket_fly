import { z } from "zod";
import { FlyCrewAssignmentSchema } from "./crew/assignment.schema";
import { FlyCrewScheduleSchema } from "./crew/schedule.schema";



// ======================================================
// CREW DUTY
// ======================================================

export const FlyCrewDutySchema = z.object({
  // ======================================================
  // BASIC
  // ======================================================

  name: z.string().min(1),

  description: z.string().optional(),

  icon: z.string().optional(),

  sortOrder: z.number().int().min(0),

  active: z.boolean(),

  // ======================================================
  // ASSIGNMENTS
  // ======================================================

  assignments: z.array(FlyCrewAssignmentSchema).optional(),

  // ======================================================
  // SCHEDULES
  // ======================================================

  schedules: z.array(FlyCrewScheduleSchema).optional(),
});

export type FlyCrewDutyFormValues = z.infer<
  typeof FlyCrewDutySchema
>;