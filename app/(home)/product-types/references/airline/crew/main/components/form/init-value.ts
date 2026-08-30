import { FlyCrewFormSchema } from "../schema/crew.schema";

import { flyCrewDefaultValues } from "./default-values";

import { FlyCrew } from "@/types/product-types/references/airline/crew/crew.types";

export function initFlyCrewFormValues(flyCrew?: FlyCrew): FlyCrewFormSchema {
  if (!flyCrew) {
    return structuredClone(flyCrewDefaultValues);
  }

  return {
    // ======================================================
    // RELATIONS
    // ======================================================

    airlineId: flyCrew.airlineId ?? "",

    roleId: flyCrew.roleId ?? "",

    // ======================================================
    // EMPLOYEE
    // ======================================================

    employeeNumber: flyCrew.employeeNumber ?? "",

    firstName: flyCrew.firstName ?? "",

    lastName: flyCrew.lastName ?? "",

    gender: flyCrew.gender ?? undefined,

    birthDate: flyCrew.birthDate ?? undefined,

    nationality: flyCrew.nationality ?? "",

    // ======================================================
    // CONTACT
    // ======================================================

    email: flyCrew.email ?? "",

    phone: flyCrew.phone ?? "",

    // ======================================================
    // STATUS
    // ======================================================

    active: flyCrew.active ?? true,

    // ======================================================
    // QUALIFICATIONS
    // ======================================================

    qualifications: (flyCrew.qualifications ?? []).map((qualification) => ({
      aircraftTypeId: qualification.aircraftTypeId ?? "",

      validUntil: qualification.validUntil ?? undefined,

      issuedAt: qualification.issuedAt ?? undefined,
    })),

    // ======================================================
    // ASSIGNMENTS
    // ======================================================

    assignments: (flyCrew.assignments ?? []).map((assignment) => ({
      tripId: assignment.tripId ?? "",

      inventoryId: assignment.inventoryId ?? "",

      dutyId: assignment.dutyId ?? "",
    })),

    // ======================================================
    // CREW SCHEDULE
    // ======================================================

    crewSchedule: (flyCrew.crewSchedule ?? []).map((schedule) => ({
      crewId: schedule.crewId ?? "",

      startTime: schedule.startTime ?? new Date(),

      endTime: schedule.endTime ?? new Date(),

      dutyId: schedule.dutyId ?? "",

      tripId: schedule.tripId ?? undefined,
    })),
  };
}
