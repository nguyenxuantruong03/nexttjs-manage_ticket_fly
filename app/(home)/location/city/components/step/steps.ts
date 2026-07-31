import { FormWizardStep } from "@/components/form/wizard/types";

import {
  Info,
  MapPinned,
  Images,
  Search,
  Plane,
  Activity,
} from "lucide-react";

import { cityFieldGroups } from "./field-groups";
import { CityFormSchema } from "../form/schema";

export const citySteps: FormWizardStep<CityFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "City basic information",
    icon: Info,

    fields: cityFieldGroups.basic,
  },

  {
    id: "location",
    title: "Location",
    description: "Geography & country information",
    icon: MapPinned,

    fields: cityFieldGroups.location,
  },

  {
    id: "media",
    title: "Media",
    description: "City images and videos",
    icon: Images,

    fields: cityFieldGroups.media,
  },

  {
    id: "search",
    title: "Search",
    description: "Search configuration",
    icon: Search,

    fields: cityFieldGroups.search,
  },

  {
    id: "travel",
    title: "Travel",
    description: "Travel information",
    icon: Plane,

    fields: cityFieldGroups.travel,
  },

  {
    id: "status",
    title: "Status",
    description: "City visibility",
    icon: Activity,

    fields: cityFieldGroups.status,
  },
];
