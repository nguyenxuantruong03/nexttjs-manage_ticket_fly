import { Info, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { BusSeatTypeFormSchema } from "../form/schema";
import { busSeatTypeFieldGroups } from "./field-groups";

export const busSeatTypeSteps: FormWizardStep<BusSeatTypeFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Bus seat type information",
    icon: Info,

    fields: busSeatTypeFieldGroups.basic,
  },

  {
    id: "status",
    title: "Status",
    description: "Bus seat type status",
    icon: Activity,

    fields: busSeatTypeFieldGroups.status,
  },
];