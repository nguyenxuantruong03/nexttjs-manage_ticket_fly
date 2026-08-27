import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, Plane } from "lucide-react";


import { flyAllianceFieldGroups } from "./field-groups";
import { FlyAllianceFormSchema } from "../schema/alliance.schema";

export const flyAllianceSteps: FormWizardStep<FlyAllianceFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Alliance basic information",
    icon: Info,
    fields: flyAllianceFieldGroups.basic,
  },

  {
    id: "airlines",
    title: "Member Airlines",
    description: "Airlines that belong to this alliance",
    icon: Plane,
    fields: flyAllianceFieldGroups.airlines,
  },
];
