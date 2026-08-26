import { Info, Settings } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { BathroomTypeFormSchema } from "../form/schema";
import { bathroomTypeFieldGroups } from "./field-groups";

export const bathroomTypeSteps: FormWizardStep<BathroomTypeFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Basic bathroom type information",
    icon: Info,

    fields: bathroomTypeFieldGroups.basic,
  },
  {
    id: "settings",
    title: "Settings",
    description: "Display settings",
    icon: Settings,

    fields: bathroomTypeFieldGroups.settings,
  },
];