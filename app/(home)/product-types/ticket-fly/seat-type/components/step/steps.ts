import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, Activity } from "lucide-react";

import { FlySeatTypeFormSchema } from "../form/schema";
import { flySeatTypeFieldGroups } from "./field-groups";

export const flySeatTypeSteps: FormWizardStep<FlySeatTypeFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Fly seat type basic information",
    icon: Info,

    fields: flySeatTypeFieldGroups.basic,
  },

  {
    id: "status",
    title: "Status",
    description: "Fly seat type status",
    icon: Activity,

    fields: flySeatTypeFieldGroups.status,
  },
];