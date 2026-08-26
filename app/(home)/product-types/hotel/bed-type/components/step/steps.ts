import { Info, Settings } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { BedTypeFormSchema } from "../form/schema";
import { bedTypeFieldGroups } from "./field-groups";

export const bedTypeSteps: FormWizardStep<BedTypeFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Basic bed type information",
    icon: Info,

    fields: bedTypeFieldGroups.basic,
  },
  {
    id: "settings",
    title: "Settings",
    description: "Display settings",
    icon: Settings,

    fields: bedTypeFieldGroups.settings,
  },
];
