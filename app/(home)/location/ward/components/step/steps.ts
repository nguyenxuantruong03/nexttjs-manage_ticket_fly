import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, MapPinned, Images } from "lucide-react";
import { WardFormSchema } from "../form/schema";
import { wardFieldGroups } from "./field-groups";

export const wardSteps: FormWizardStep<WardFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Address basic information",
    icon: Info,

    fields: wardFieldGroups.basic,
  },

  {
    id: "location",
    title: "Location",
    description: "Geography & country information",
    icon: MapPinned,

    fields: wardFieldGroups.location,
  },
];
