import { Info, Flag, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { FeatureFlagFormSchema } from "../form/schema";

import { featureFlagFieldGroups } from "./field-groups";

export const featureFlagSteps: FormWizardStep<FeatureFlagFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Feature flag information",
    icon: Info,
    fields: featureFlagFieldGroups.basic,
  },

  {
    id: "rollout",
    title: "Rollout",
    description: "Feature flag rollout configuration",
    icon: Flag,
    fields: featureFlagFieldGroups.rollout,
  },

  {
    id: "status",
    title: "Status",
    description: "Feature flag status",
    icon: Activity,
    fields: featureFlagFieldGroups.status,
  },
];
