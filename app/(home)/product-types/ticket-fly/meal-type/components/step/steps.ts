import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, Activity } from "lucide-react";

import { FlyMealTypeFormSchema } from "../form/schema";
import { flyMealTypeFieldGroups } from "./field-groups";

export const flyMealTypeSteps: FormWizardStep<FlyMealTypeFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Fly meal type basic information",
    icon: Info,

    fields: flyMealTypeFieldGroups.basic,
  },

  {
    id: "status",
    title: "Status",
    description: "Fly meal type status",
    icon: Activity,

    fields: flyMealTypeFieldGroups.status,
  },
];