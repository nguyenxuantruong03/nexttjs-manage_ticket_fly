import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, MapPinned, Images, Activity } from "lucide-react";
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

  {
    id: "media",
    title: "Media",
    description: "City images and videos",
    icon: Images,

    fields: addressFieldGroups.media,
  },

  {
    id: "status",
    title: "Status",
    description: "Address visibility",
    icon: Activity,

    fields: addressFieldGroups.status,
  },
];
