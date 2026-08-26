import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, Images, ArrowDownUp, Activity } from "lucide-react";

import { placeTypeFieldGroups } from "./field-groups";

import { PlaceTypeFormSchema } from "../form/schema";

export const placeTypeSteps: FormWizardStep<PlaceTypeFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Place type basic information",
    icon: Info,
    fields: placeTypeFieldGroups.basic,
  },

  {
    id: "media",
    title: "Media",
    description: "Place type icon and images",
    icon: Images,
    fields: placeTypeFieldGroups.media,
  },

  {
    id: "display",
    title: "Display",
    description: "Place type display settings",
    icon: ArrowDownUp,
    fields: placeTypeFieldGroups.display,
  },

  {
    id: "status",
    title: "Status",
    description: "Place type visibility settings",
    icon: Activity,
    fields: placeTypeFieldGroups.status,
  },
];
