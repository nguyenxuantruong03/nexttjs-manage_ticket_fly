import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, Activity } from "lucide-react";

import { FlyCrewRoleFormSchema } from "../form/schema";

import { flyCrewRoleFieldGroups } from "./field-groups";

export const flyCrewRoleSteps: FormWizardStep<FlyCrewRoleFormSchema>[] = [
  {
    id: "basic",

    title: "Basic",

    description: "Fly crew role basic information",

    icon: Info,

    fields: flyCrewRoleFieldGroups.basic,
  },

  {
    id: "status",

    title: "Status",

    description: "Fly crew role status",

    icon: Activity,

    fields: flyCrewRoleFieldGroups.status,
  },
];
