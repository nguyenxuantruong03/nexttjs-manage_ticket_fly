import { Info, Settings } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { DiningMealTypeFormSchema } from "../form/schema";
import { diningMealTypeFieldGroups } from "./field-groups";

export const diningMealTypeSteps: FormWizardStep<DiningMealTypeFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Basic dining meal type information",
    icon: Info,

    fields: diningMealTypeFieldGroups.basic,
  },
  {
    id: "settings",
    title: "Settings",
    description: "Display settings",
    icon: Settings,

    fields: diningMealTypeFieldGroups.settings,
  },
];
