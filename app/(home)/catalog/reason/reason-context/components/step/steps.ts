import { Info, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { ReasonContextFormSchema } from "../form/schema";
import { reasonContextFieldGroups } from "./field-groups";

export const reasonContextSteps: FormWizardStep<ReasonContextFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Reason context information",
    icon: Info,
    fields: reasonContextFieldGroups.basic,
  },

  {
    id: "status",
    title: "Status",
    description: "Reason context status",
    icon: Activity,
    fields: reasonContextFieldGroups.status,
  },
];
