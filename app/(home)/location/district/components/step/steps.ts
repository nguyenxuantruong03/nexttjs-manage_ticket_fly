import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, MapPinned, Images, Activity, Search } from "lucide-react";
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
    id: "media",
    title: "Media",
    description: "City images and videos",
    icon: Images,

    fields: districtFieldGroups.media,
  },

  {
    id: "location",
    title: "Location",
    description: "Geography & country information",
    icon: MapPinned,

    fields: districtFieldGroups.location,
  },

  {
    id: "search",
    title: "Search",
    description: "Search configuration",
    icon: Search,

    fields: districtFieldGroups.search,
  },

  {
    id: "status",
    title: "Status",
    description: "District visibility",
    icon: Activity,

    fields: districtFieldGroups.status,
  },
];
