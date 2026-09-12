import { Info, FolderTree, CalendarCheck, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { RegulationFormSchema } from "../form/schema";

import { regulationFieldGroups } from "./field-groups";

export const regulationSteps: FormWizardStep<RegulationFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Regulation information",
    icon: Info,
    fields: regulationFieldGroups.basic,
  },

  {
    id: "category",
    title: "Category",
    description: "Regulation category configuration",
    icon: FolderTree,
    fields: regulationFieldGroups.category,
  },

  {
    id: "effective-period",
    title: "Effective Period",
    description: "Configure regulation effective period",
    icon: CalendarCheck,
    fields: regulationFieldGroups.effectivePeriod,
  },

  {
    id: "status",
    title: "Status",
    description: "Regulation status",
    icon: Activity,
    fields: regulationFieldGroups.status,
  },
];
