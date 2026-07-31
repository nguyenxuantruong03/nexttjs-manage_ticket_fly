import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, MapPinned, Images } from "lucide-react";
import { districtFieldGroups } from "./field-groups";
import { DistrictFormSchema } from "../form/schema";

export const DistrictSteps: FormWizardStep<DistrictFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Address basic information",
    icon: Info,

    fields: districtFieldGroups.basic,
  },

  {
    id: "location",
    title: "Location",
    description: "Geography & country information",
    icon: MapPinned,

    fields: districtFieldGroups.location,
  },
];
