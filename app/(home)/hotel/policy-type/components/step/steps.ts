import { Info, Settings } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { PolicyTypeFormSchema } from "../form/schema";
import { policyTypeFieldGroups } from "./field-groups";

export const policyTypeSteps: FormWizardStep<PolicyTypeFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Basic policy type information",
    icon: Info,

    fields: policyTypeFieldGroups.basic,
  },
  {
    id: "settings",
    title: "Settings",
    description: "Policy type settings",
    icon: Settings,

    fields: policyTypeFieldGroups.settings,
  },
];