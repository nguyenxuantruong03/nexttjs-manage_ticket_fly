import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, MapPinned, Images } from "lucide-react";
import { AddressFormSchema } from "../form/schema";
import { addressFieldGroups } from "./field-groups";

export const addressSteps: FormWizardStep<AddressFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Address basic information",
    icon: Info,

    fields: addressFieldGroups.basic,
  },

  {
    id: "location",
    title: "Location",
    description: "Geography & country information",
    icon: MapPinned,

    fields: addressFieldGroups.location,
  },
];
