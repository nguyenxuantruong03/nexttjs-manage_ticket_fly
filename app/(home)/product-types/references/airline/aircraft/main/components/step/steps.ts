import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, Activity } from "lucide-react";

import { FlyAircraftFormSchema } from "../form/schema";

import { flyAircraftFieldGroups } from "./field-groups";

export const flyAircraftSteps: FormWizardStep<FlyAircraftFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Fly aircraft basic information",
    icon: Info,
    fields: flyAircraftFieldGroups.basic,
  },

  {
    id: "status",
    title: "Status",
    description: "Fly aircraft status",
    icon: Activity,
    fields: flyAircraftFieldGroups.status,
  },
];
