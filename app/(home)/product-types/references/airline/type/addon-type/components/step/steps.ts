import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, Activity } from "lucide-react";

import { FlyAddonTypeFormSchema } from "../form/schema";
import { flyAddonTypeFieldGroups } from "./field-groups";

export const flyAddonTypeSteps: FormWizardStep<FlyAddonTypeFormSchema>[] =
  [
    {
      id: "basic",
      title: "Basic",
      description: "Fly addon type basic information",
      icon: Info,

      fields: flyAddonTypeFieldGroups.basic,
    },

    {
      id: "status",
      title: "Status",
      description: "Fly addon type status",
      icon: Activity,

      fields: flyAddonTypeFieldGroups.status,
    },
  ];