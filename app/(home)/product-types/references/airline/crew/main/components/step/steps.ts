import { FormWizardStep } from "@/components/form/wizard/types";

import {
  Info,
  UserRound,
  Building2,
  BriefcaseBusiness,
  Phone,
  ShieldCheck,
  Award,
  Plane,
  CalendarDays,
} from "lucide-react";

import { FlyCrewFormSchema } from "../form/schema";

import { flyCrewFieldGroups } from "./field-groups";

export const flyCrewSteps: FormWizardStep<FlyCrewFormSchema>[] = [
  {
    id: "airline",

    title: "Airline",

    description: "Select the airline",

    icon: Building2,

    fields: flyCrewFieldGroups.airline,
  },

  {
    id: "employee",

    title: "Employee",

    description: "Employee information",

    icon: BriefcaseBusiness,

    fields: flyCrewFieldGroups.employee,
  },

  {
    id: "basic",

    title: "Basic",

    description: "Crew member basic information",

    icon: Info,

    fields: flyCrewFieldGroups.basic,
  },

  {
    id: "role",

    title: "Role",

    description: "Crew role information",

    icon: UserRound,

    fields: flyCrewFieldGroups.role,
  },

  {
    id: "contact",

    title: "Contact",

    description: "Crew contact information",

    icon: Phone,

    fields: flyCrewFieldGroups.contact,
  },

  {
    id: "status",

    title: "Status",

    description: "Crew member status",

    icon: ShieldCheck,

    fields: flyCrewFieldGroups.status,
  },

  {
    id: "qualifications",

    title: "Qualifications",

    description: "Aircraft qualifications",

    icon: Award,

    fields: flyCrewFieldGroups.qualifications,
  },

  {
    id: "assignments",

    title: "Assignments",

    description: "Crew trip assignments",

    icon: Plane,

    fields: flyCrewFieldGroups.assignments,
  },

  {
    id: "crewSchedule",

    title: "Schedule",

    description: "Crew schedule information",

    icon: CalendarDays,

    fields: flyCrewFieldGroups.crewSchedule,
  },
];
