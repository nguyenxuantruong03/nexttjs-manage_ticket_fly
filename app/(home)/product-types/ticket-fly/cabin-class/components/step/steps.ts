import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, Activity } from "lucide-react";

import { FlyCabinClassFormSchema } from "../form/schema";
import { flyCabinClassFieldGroups } from "./field-groups";

export const flyCabinClassSteps: FormWizardStep<FlyCabinClassFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Fly cabin class basic information",
    icon: Info,

    fields: flyCabinClassFieldGroups.basic,
  },

  {
    id: "status",
    title: "Status",
    description: "Fly cabin class status",
    icon: Activity,

    fields: flyCabinClassFieldGroups.status,
  },
];
