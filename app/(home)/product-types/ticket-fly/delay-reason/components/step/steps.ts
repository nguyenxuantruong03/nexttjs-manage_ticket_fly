import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, Activity } from "lucide-react";

import { FlyDelayReasonFormSchema } from "../form/schema";
import { flyDelayReasonFieldGroups } from "./field-groups";

export const flyDelayReasonSteps: FormWizardStep<FlyDelayReasonFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Fly delay reason basic information",
    icon: Info,

    fields: flyDelayReasonFieldGroups.basic,
  },

  {
    id: "status",
    title: "Status",
    description: "Fly delay reason status",
    icon: Activity,

    fields: flyDelayReasonFieldGroups.status,
  },
];
