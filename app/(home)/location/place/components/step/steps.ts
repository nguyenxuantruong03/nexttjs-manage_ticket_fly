import { FormWizardStep } from "@/components/form/wizard/types";

import {
  Info,
  MapPinned,
  Images,
  Search,
  Tags,
  Activity,
} from "lucide-react";

import { placeFieldGroups } from "./field-groups";
import { PlaceFormSchema } from "../form/schema";

export const placeSteps: FormWizardStep<PlaceFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Place basic information",
    icon: Info,

    fields: placeFieldGroups.basic,
  },


  {
    id: "location",
    title: "Location",
    description: "Place address and coordinates",
    icon: MapPinned,

    fields: placeFieldGroups.location,
  },


  {
    id: "category",
    title: "Category",
    description: "Place type and classification",
    icon: Tags,

    fields: placeFieldGroups.category,
  },


  {
    id: "media",
    title: "Media",
    description: "Place images and media",
    icon: Images,

    fields: placeFieldGroups.media,
  },


  {
    id: "search",
    title: "Search",
    description: "Search and popularity configuration",
    icon: Search,

    fields: placeFieldGroups.search,
  },


  {
    id: "status",
    title: "Status",
    description: "Place visibility and verification",
    icon: Activity,

    fields: placeFieldGroups.status,
  },
];