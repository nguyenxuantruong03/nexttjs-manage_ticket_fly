import { Info, Settings } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { MealPlanFormSchema } from "../form/schema";
import { mealPlanFieldGroups } from "./field-groups";

export const mealPlanSteps: FormWizardStep<MealPlanFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Basic meal plan information",
    icon: Info,

    fields: mealPlanFieldGroups.basic,
  },
  {
    id: "settings",
    title: "Settings",
    description: "Meal plan settings",
    icon: Settings,

    fields: mealPlanFieldGroups.settings,
  },
];
