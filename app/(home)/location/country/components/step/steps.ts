import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, MapPinned, Images, Search, Activity } from "lucide-react";

import { CountryFormSchema } from "../form/schema";
import { countryFieldGroups } from "./field-groups";

export const countrySteps: FormWizardStep<CountryFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Country basic information",
    icon: Info,
    fields: countryFieldGroups.basic,
  },

  {
    id: "location",
    title: "Location",
    description: "Geography information",
    icon: MapPinned,
    fields: countryFieldGroups.location,
  },

  {
    id: "media",
    title: "Media",
    description: "Country images",
    icon: Images,
    fields: countryFieldGroups.media,
  },

  {
    id: "search",
    title: "Search",
    description: "Search metadata",
    icon: Search,
    fields: countryFieldGroups.search,
  },

  {
    id: "status",
    title: "Status",
    description: "Country visibility",
    icon: Activity,
    fields: countryFieldGroups.status,
  },
];
