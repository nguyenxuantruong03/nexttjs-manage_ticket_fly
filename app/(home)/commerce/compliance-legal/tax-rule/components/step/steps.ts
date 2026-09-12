import { Globe2, CalendarCheck, Percent, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { TaxRuleFormSchema } from "../form/schema";

import { taxRuleFieldGroups } from "./field-groups";

export const taxRuleSteps: FormWizardStep<TaxRuleFormSchema>[] = [
  {
    id: "country",

    title: "Country",

    description: "Tax rule country configuration",

    icon: Globe2,

    fields: taxRuleFieldGroups.country,
  },

  {
    id: "booking-type",

    title: "Booking Type",

    description: "Tax rule booking configuration",

    icon: CalendarCheck,

    fields: taxRuleFieldGroups.bookingType,
  },

  {
    id: "tax",

    title: "Tax",

    description: "Tax percentage configuration",

    icon: Percent,

    fields: taxRuleFieldGroups.tax,
  },

  {
    id: "effective-period",

    title: "Effective Period",

    description: "Configure the effective period of the tax rule",

    icon: CalendarCheck,

    fields: taxRuleFieldGroups.effectivePeriod,
  },

  {
    id: "status",

    title: "Status",

    description: "Tax rule status configuration",

    icon: Activity,

    fields: taxRuleFieldGroups.status,
  },
];