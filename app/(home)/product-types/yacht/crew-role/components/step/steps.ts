import { Info, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { YachtCrewRoleFormSchema } from "../form/schema";
import { yachtCrewRoleFieldGroups } from "./field-groups";

export const yachtCrewRoleSteps: FormWizardStep<YachtCrewRoleFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Yacht crew role information",
    icon: Info,

    fields: yachtCrewRoleFieldGroups.basic,
  },

  {
    id: "status",
    title: "Status",
    description: "Yacht crew role status",
    icon: Activity,

    fields: yachtCrewRoleFieldGroups.status,
  },
];