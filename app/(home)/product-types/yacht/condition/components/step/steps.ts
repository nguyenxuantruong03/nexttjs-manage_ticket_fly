import { Info, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { YachtConditionFormSchema } from "../form/schema";
import { yachtConditionFieldGroups } from "./field-groups";

export const yachtConditionSteps: FormWizardStep<YachtConditionFormSchema>[] =
  [
    {
      id: "basic",
      title: "Basic",
      description: "Yacht condition information",
      icon: Info,

      fields: yachtConditionFieldGroups.basic,
    },

    {
      id: "status",
      title: "Status",
      description: "Yacht condition status",
      icon: Activity,

      fields: yachtConditionFieldGroups.status,
    },
  ];