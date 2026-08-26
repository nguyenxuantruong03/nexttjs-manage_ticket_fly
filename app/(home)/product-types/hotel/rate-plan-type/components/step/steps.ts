import { Info, Settings } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { RatePlanTypeFormSchema } from "../form/schema";
import { ratePlanTypeFieldGroups } from "./field-groups";

export const ratePlanTypeSteps: FormWizardStep<RatePlanTypeFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Basic rate plan type information",
    icon: Info,

    fields: ratePlanTypeFieldGroups.basic,
  },
  {
    id: "settings",
    title: "Settings",
    description: "Rate plan type settings",
    icon: Settings,

    fields: ratePlanTypeFieldGroups.settings,
  },
];
