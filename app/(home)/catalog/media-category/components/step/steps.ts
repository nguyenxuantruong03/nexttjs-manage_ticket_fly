import { Info, CalendarCheck, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { MediaCategoryFormSchema } from "../form/schema";

import { mediaCategoryFieldGroups } from "./field-groups";

export const mediaCategorySteps: FormWizardStep<MediaCategoryFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Media category information",
    icon: Info,
    fields: mediaCategoryFieldGroups.basic,
  },

  {
    id: "booking-type",
    title: "Booking Type",
    description: "Media category booking configuration",
    icon: CalendarCheck,
    fields: mediaCategoryFieldGroups.bookingType,
  },

  {
    id: "status",
    title: "Status",
    description: "Media category status",
    icon: Activity,
    fields: mediaCategoryFieldGroups.status,
  },
];
