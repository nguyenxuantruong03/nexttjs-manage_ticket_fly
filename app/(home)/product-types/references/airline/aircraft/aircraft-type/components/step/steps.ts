import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, Activity } from "lucide-react";

import { FlyAircraftTypeFormSchema } from "../form/schema";

import { flyAircraftTypeFieldGroups } from "./field-groups";

export const flyAircraftTypeSteps: FormWizardStep<FlyAircraftTypeFormSchema>[] =
  [
    {
      id: "basic",

      title: "Basic",

      description: "Fly aircraft type basic information",

      icon: Info,

      fields: flyAircraftTypeFieldGroups.basic,
    },

    {
      id: "status",

      title: "Status",

      description: "Fly aircraft type status",

      icon: Activity,

      fields: flyAircraftTypeFieldGroups.status,
    },
  ];
