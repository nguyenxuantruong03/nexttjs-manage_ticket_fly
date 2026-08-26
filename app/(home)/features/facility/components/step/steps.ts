import { Info, Activity, Layers } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { FacilityFormSchema } from "../form/schema";
import { facilityFieldGroups } from "./field-groups";

export const facilitySteps: FormWizardStep<FacilityFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Facility information",
    icon: Info,
    fields: facilityFieldGroups.basic,
  },

  {
    id: "category",
    title: "Category",
    description: "Facility category and booking type",
    icon: Layers,
    fields: facilityFieldGroups.category,
  },

  {
    id: "status",
    title: "Status",
    description: "Facility status",
    icon: Activity,
    fields: facilityFieldGroups.status,
  },
];