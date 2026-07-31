import { Info, Settings } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { TypeFormSchema } from "../form/schema";
import { typeFieldGroups } from "./field-groups";

export const typeSteps: FormWizardStep<TypeFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Basic hotel type information",
    icon: Info,

    fields: typeFieldGroups.basic,
  },
  {
    id: "settings",
    title: "Settings",
    description: "Hotel type settings",
    icon: Settings,

    fields: typeFieldGroups.settings,
  },
];
