import { Info, Settings } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { DiningServiceTypeFormSchema } from "../form/schema";
import { diningServiceTypeFieldGroups } from "./field-groups";

export const diningServiceTypeSteps: FormWizardStep<DiningServiceTypeFormSchema>[] =
  [
    {
      id: "basic",
      title: "Basic",
      description: "Basic dining service type information",
      icon: Info,

      fields: diningServiceTypeFieldGroups.basic,
    },
    {
      id: "settings",
      title: "Settings",
      description: "Display settings",
      icon: Settings,

      fields: diningServiceTypeFieldGroups.settings,
    },
  ];
