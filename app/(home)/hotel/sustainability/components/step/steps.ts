import { Info } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { SustainabilityFormSchema } from "../form/schema";
import { sustainabilityFieldGroups } from "./field-groups";

export const sustainabilitySteps: FormWizardStep<
  SustainabilityFormSchema
>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Basic sustainability information",
    icon: Info,

    fields: sustainabilityFieldGroups.basic,
  },
];