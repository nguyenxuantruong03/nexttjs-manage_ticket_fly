import { Info, Briefcase, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { SearchTagFormSchema } from "../form/schema";

import { searchTagFieldGroups } from "./field-groups";

export const searchTagSteps: FormWizardStep<SearchTagFormSchema>[] = [
  {
    id: "basic",

    title: "Basic",

    description: "Tag information",

    icon: Info,

    fields: searchTagFieldGroups.basic,
  },

  {
    id: "booking-type",

    title: "Booking Types",

    description: "Select booking types",

    icon: Briefcase,

    fields: searchTagFieldGroups.bookingType,
  },

  {
    id: "status",

    title: "Status",

    description: "Tag status",

    icon: Activity,

    fields: searchTagFieldGroups.status,
  },
];
