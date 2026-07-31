import { Info } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { PolicyFormSchema } from "../form/schema";
import { policyFieldGroups } from "./field-groups";

export const policySteps: FormWizardStep<PolicyFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Basic policy information",
    icon: Info,

    fields: policyFieldGroups.basic,
  },
];
