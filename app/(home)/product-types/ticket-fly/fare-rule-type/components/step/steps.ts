import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, Activity } from "lucide-react";

import { FlyFareRuleTypeFormSchema } from "../form/schema";
import { flyFareRuleTypeFieldGroups } from "./field-groups";

export const flyFareRuleTypeSteps: FormWizardStep<FlyFareRuleTypeFormSchema>[] =
  [
    {
      id: "basic",
      title: "Basic",
      description: "Fly fare rule type basic information",
      icon: Info,

      fields: flyFareRuleTypeFieldGroups.basic,
    },

    {
      id: "status",
      title: "Status",
      description: "Fly fare rule type status",
      icon: Activity,

      fields: flyFareRuleTypeFieldGroups.status,
    },
  ];
