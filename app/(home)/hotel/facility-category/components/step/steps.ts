import { Info, Settings } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { FacilityCategoryFormSchema } from "../form/schema";
import { facilityCategoryFieldGroups } from "./field-groups";

export const facilityCategorySteps: FormWizardStep<
  FacilityCategoryFormSchema
>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Basic facility category information",
    icon: Info,

    fields: facilityCategoryFieldGroups.basic,
  },
  {
    id: "settings",
    title: "Settings",
    description: "Display settings",
    icon: Settings,

    fields: facilityCategoryFieldGroups.settings,
  },
];