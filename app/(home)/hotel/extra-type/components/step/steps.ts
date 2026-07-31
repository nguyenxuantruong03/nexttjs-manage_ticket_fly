import { Info, Settings } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { ExtraTypeFormSchema } from "../form/schema";
import { extraTypeFieldGroups } from "./field-groups";

export const extraTypeSteps: FormWizardStep<ExtraTypeFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Basic extra type information",
    icon: Info,

    fields: extraTypeFieldGroups.basic,
  },
  {
    id: "settings",
    title: "Settings",
    description: "Display settings",
    icon: Settings,

    fields: extraTypeFieldGroups.settings,
  },
];
