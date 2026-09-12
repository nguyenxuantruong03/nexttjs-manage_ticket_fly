import { Info, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { RegulationCategoryFormSchema } from "../form/schema";

import { regulationCategoryFieldGroups } from "./field-groups";

export const regulationCategorySteps: FormWizardStep<RegulationCategoryFormSchema>[] =
  [
    {
      id: "basic",

      title: "Basic",

      description: "Regulation category information",

      icon: Info,

      fields: regulationCategoryFieldGroups.basic,
    },

    {
      id: "status",

      title: "Status",

      description: "Regulation category status",

      icon: Activity,

      fields: regulationCategoryFieldGroups.status,
    },
  ];
