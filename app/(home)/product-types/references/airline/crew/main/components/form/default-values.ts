import { FlyCrewFormSchema } from "../schema/crew.schema";

export const flyCrewDefaultValues: FlyCrewFormSchema = {
  // ======================================================
  // AIRLINE
  // ======================================================

  airlineId: "",

  // ======================================================
  // EMPLOYEE
  // ======================================================

  employeeNumber: "",

  // ======================================================
  // BASIC INFO
  // ======================================================

  firstName: "",

  lastName: "",

  // gender is optional in the schema - leave unset instead of
  // defaulting to a specific value so the field starts empty
  gender: undefined,

  // birthDate is optional - defaulting to "today" made the field
  // look pre-filled with a fake birth date
  birthDate: undefined,

  nationality: "",

  // ======================================================
  // CREW ROLE
  // ======================================================

  roleId: "",

  // ======================================================
  // CONTACT
  // ======================================================

  email: "",

  phone: "",

  // ======================================================
  // STATUS
  // ======================================================

  active: true,

  // ======================================================
  // QUALIFICATIONS
  // ======================================================

  qualifications: [],

  // ======================================================
  // ASSIGNMENTS
  // ======================================================

  assignments: [],

  // ======================================================
  // CREW SCHEDULE
  // ======================================================

  crewSchedule: [],
};