import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, Activity } from "lucide-react";

import { FlyCrewDutyFormSchema } from "../form/schema";
import { flyCrewDutyFieldGroups } from "./field-groups";

export const flyCrewDutySteps: FormWizardStep<FlyCrewDutyFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Fly crew duty basic information",
    icon: Info,

    fields: flyCrewDutyFieldGroups.basic,
  },

  {
    id: "status",
    title: "Status",
    description: "Fly crew duty status",
    icon: Activity,

    fields: flyCrewDutyFieldGroups.status,
  },
];
