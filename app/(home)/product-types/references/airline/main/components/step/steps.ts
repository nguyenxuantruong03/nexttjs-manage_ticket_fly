import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, Activity } from "lucide-react";

import { FlyAirlineFormSchema } from "../form/schema";

import { flyAirlineFieldGroups } from "./field-groups";

export const flyAirlineSteps: FormWizardStep<FlyAirlineFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Fly airline basic information",
    icon: Info,
    fields: flyAirlineFieldGroups.basic,
  },

  {
    id: "status",
    title: "Status",
    description: "Fly airline status",
    icon: Activity,
    fields: flyAirlineFieldGroups.status,
  },
];
