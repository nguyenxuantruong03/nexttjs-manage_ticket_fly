import { Info, Activity, CalendarCheck } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { ExtraTypeFormSchema } from "../form/schema";
import { extraTypeFieldGroups } from "./field-groups";

export const extraTypeSteps: FormWizardStep<ExtraTypeFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Extra type information",
    icon: Info,
    fields: extraTypeFieldGroups.basic,
  },

  {
    id: "booking-type",
    title: "Booking Type",
    description: "Configure the booking type",
    icon: CalendarCheck,
    fields: extraTypeFieldGroups.bookingType,
  },

  {
    id: "status",
    title: "Status",
    description: "Extra type status",
    icon: Activity,
    fields: extraTypeFieldGroups.status,
  },
];
