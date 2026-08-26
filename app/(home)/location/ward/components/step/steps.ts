import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, MapPinned, Images, Activity, Search } from "lucide-react";
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
    id: "media",
    title: "Media",
    description: "City images and videos",
    icon: Images,

    fields: wardFieldGroups.media,
  },

  {
    id: "location",
    title: "Location",
    description: "Geography & country information",
    icon: MapPinned,

    fields: wardFieldGroups.location,
  },

  {
    id: "search",
    title: "Search",
    description: "Search configuration",
    icon: Search,

    fields: wardFieldGroups.search,
  },

  {
    id: "status",
    title: "Status",
    description: "Ward visibility",
    icon: Activity,

    fields: wardFieldGroups.status,
  },
];
