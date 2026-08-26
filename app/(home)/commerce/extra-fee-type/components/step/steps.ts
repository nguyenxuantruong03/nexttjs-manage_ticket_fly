import { Info, CalendarCheck, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { ExtraFeeTypeFormSchema } from "../form/schema";

import { extraFeeTypeFieldGroups } from "./field-groups";

export const extraFeeTypeSteps: FormWizardStep<ExtraFeeTypeFormSchema>[] = [
  {
    id: "basic",

    title: "Basic",

    description: "Extra fee type information",

    icon: Info,

    fields: extraFeeTypeFieldGroups.basic,
  },

  {
    id: "booking-type",

    title: "Booking Type",

    description: "Extra fee type booking configuration",

    icon: CalendarCheck,

    fields: extraFeeTypeFieldGroups.bookingType,
  },

  {
    id: "status",

    title: "Status",

    description: "Extra fee type status",

    icon: Activity,

    fields: extraFeeTypeFieldGroups.status,
  },
];
