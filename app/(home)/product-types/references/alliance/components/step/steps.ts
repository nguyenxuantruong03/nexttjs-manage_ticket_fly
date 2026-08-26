import { FormWizardStep } from "@/components/form/wizard/types";

import { Info } from "lucide-react";

import { FlyAllianceFormSchema } from "../form/schema";

import { flyAllianceFieldGroups } from "./field-groups";

export const flyAllianceSteps: FormWizardStep<FlyAllianceFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Alliance basic information",
    icon: Info,
    fields: flyAllianceFieldGroups.basic,
  },
];
