import { Info, Activity, CalendarCheck } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { FacilityCategoryFormSchema } from "../form/schema";
import { facilityCategoryFieldGroups } from "./field-groups";

export const facilityCategorySteps: FormWizardStep<FacilityCategoryFormSchema>[] =
  [
    {
      id: "basic",
      title: "Basic",
      description: "Facility category information",
      icon: Info,
      fields: facilityCategoryFieldGroups.basic,
    },

    {
    id: "booking-type",

    title: "Booking Type",

    description: "Extra fee type booking configuration",

    icon: CalendarCheck,

    fields: facilityCategoryFieldGroups.bookingType,
  },

    {
      id: "status",
      title: "Status",
      description: "Facility category status",
      icon: Activity,
      fields: facilityCategoryFieldGroups.status,
    },
  ];
