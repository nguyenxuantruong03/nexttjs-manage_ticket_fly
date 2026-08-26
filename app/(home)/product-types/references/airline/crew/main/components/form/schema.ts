import { Gender } from "@/types/common/enums";
import { z } from "zod";

export const FlyCrewSchema = z.object({
  // ======================================================
  // AIRLINE
  // ======================================================

  airlineId: z.string().trim().min(1, "Airline is required"),

  // ======================================================
  // EMPLOYEE
  // ======================================================

  employeeNumber: z.string().trim().optional(),

  // ======================================================
  // BASIC INFO
  // ======================================================

  firstName: z.string().trim().min(1, "First name is required"),

  lastName: z.string().trim().min(1, "Last name is required"),

  gender: z.nativeEnum(Gender).optional(),

  birthDate: z.date().optional(),

  nationality: z.string().trim().optional(),

  // ======================================================
  // CREW ROLE
  // ======================================================

  roleId: z.string().trim().min(1, "Crew role is required"),

  // ======================================================
  // CONTACT
  // ======================================================

  email: z.string().trim().email("Invalid email").optional().or(z.literal("")),

  phone: z.string().trim().optional(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),

  // ======================================================
  // QUALIFICATIONS
  // ======================================================

  qualifications: z
    .array(
      z.object({
        aircraftTypeId: z.string().trim().min(1, "Aircraft type is required"),

        validUntil: z.date().optional(),

        issuedAt: z.date().optional(),
      }),
    )
    .optional(),

  // ======================================================
  // ASSIGNMENTS
  // ======================================================

  assignments: z
    .array(
      z.object({
        tripId: z.string().trim().min(1, "Trip is required"),

        inventoryId: z.string().trim().min(1, "Inventory is required"),

        dutyId: z.string().trim().min(1, "Duty is required"),
      }),
    )
    .optional(),

  // ======================================================
  // CREW SCHEDULE
  // ======================================================

  crewSchedule: z
    .array(
      z.object({
        crewId: z.string(),
        startTime: z.date(),

        endTime: z.date(),

        dutyId: z.string().trim().min(1, "Duty is required"),

        tripId: z.string().optional(),
      }),
    )
    .optional(),
});

export type FlyCrewFormSchema = z.infer<typeof FlyCrewSchema>;
