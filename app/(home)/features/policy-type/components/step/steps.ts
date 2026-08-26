import { Info, Activity, CalendarCheck } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { PolicyTypeFormSchema } from "../form/schema";

import { policyTypeFieldGroups } from "./field-groups";

export const policyTypeSteps: FormWizardStep<PolicyTypeFormSchema>[] = [
  {
    id: "basic",

    title: "Basic",

    description: "Policy type information",

    icon: Info,

    fields: policyTypeFieldGroups.basic,
  },

  {
    id: "booking-type",

    title: "Booking Type",

    description: "Policy type booking configuration",

    icon: CalendarCheck,

    fields: policyTypeFieldGroups.bookingType,
  },

  {
    id: "status",

    title: "Status",

    description: "Policy type status",

    icon: Activity,

    fields: policyTypeFieldGroups.status,
  },
];
