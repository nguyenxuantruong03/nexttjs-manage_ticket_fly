import { Info, Settings } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { FacilityFormSchema } from "../form/schema";
import { facilityFieldGroups } from "./field-groups";

export const facilitySteps: FormWizardStep<FacilityFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Basic facility information",
    icon: Info,

    fields: facilityFieldGroups.basic,
  },
  {
    id: "settings",
    title: "Settings",
    description: "Facility settings",
    icon: Settings,

    fields: facilityFieldGroups.settings,
  },
];
