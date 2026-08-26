import { Info, Activity, Layers, CalendarCheck } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { PolicyFormSchema } from "../form/schema";

import { policyFieldGroups } from "./field-groups";

export const policySteps: FormWizardStep<PolicyFormSchema>[] = [
  {
    id: "basic",

    title: "Basic",

    description: "Policy information",

    icon: Info,

    fields: policyFieldGroups.basic,
  },

  {
    id: "policy-type",

    title: "Policy Type",

    description: "Policy type configuration",

    icon: Layers,

    fields: policyFieldGroups.policyType,
  },

  {
    id: "booking-type",

    title: "Booking Type",

    description: "Booking type configuration",

    icon: CalendarCheck,

    fields: policyFieldGroups.bookingType,
  },

  {
    id: "status",

    title: "Status",

    description: "Policy status",

    icon: Activity,

    fields: policyFieldGroups.status,
  },
];