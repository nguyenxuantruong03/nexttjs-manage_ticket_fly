import { Info, Layers, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { ReasonCodeFormSchema } from "../form/schema";
import { reasonCodeFieldGroups } from "./field-groups";

export const reasonCodeSteps: FormWizardStep<ReasonCodeFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Reason code information",
    icon: Info,
    fields: reasonCodeFieldGroups.basic,
  },

  {
    id: "context",
    title: "Context",
    description: "Reason code context configuration",
    icon: Layers,
    fields: reasonCodeFieldGroups.context,
  },

  {
    id: "status",
    title: "Status",
    description: "Reason code status",
    icon: Activity,
    fields: reasonCodeFieldGroups.status,
  },
];
