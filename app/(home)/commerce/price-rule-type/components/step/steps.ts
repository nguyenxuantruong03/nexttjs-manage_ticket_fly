import { Info, CalendarCheck, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { PriceRuleTypeFormSchema } from "../form/schema";

import { priceRuleTypeFieldGroups } from "./field-groups";

export const priceRuleTypeSteps: FormWizardStep<PriceRuleTypeFormSchema>[] = [
  {
    id: "basic",

    title: "Basic",

    description: "Price rule type information",

    icon: Info,

    fields: priceRuleTypeFieldGroups.basic,
  },

  {
    id: "booking-type",

    title: "Booking Type",

    description: "Price rule type booking configuration",

    icon: CalendarCheck,

    fields: priceRuleTypeFieldGroups.bookingType,
  },

  {
    id: "status",

    title: "Status",

    description: "Price rule type status",

    icon: Activity,

    fields: priceRuleTypeFieldGroups.status,
  },
];
