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
  // ======================================================
  // BASIC
  // ======================================================

  {
    id: "basic",
    title: "Basic",
    description: "Place basic information",
    icon: Info,
    fields: placeFieldGroups.basic,
  },

  // ======================================================
  // LOCATION
  // ======================================================

  {
    id: "location",
    title: "Location",
    description: "Place address and coordinates",
    icon: MapPinned,
    fields: placeFieldGroups.location,
  },

  // ======================================================
  // CATEGORY
  // ======================================================

  {
    id: "category",
    title: "Category",
    description: "Select the place type",
    icon: Tags,
    fields: placeFieldGroups.category,
  },

  // ======================================================
  // MEDIA
  // ======================================================

  {
    id: "media",
    title: "Media",
    description: "Place images and media",
    icon: Images,
    fields: placeFieldGroups.media,
  },

  // ======================================================
  // SEARCH
  // ======================================================

  {
    id: "search",
    title: "Search",
    description: "Search and visibility configuration",
    icon: Search,
    fields: placeFieldGroups.search,
  },

  // ======================================================
  // STATUS
  // ======================================================

  {
    id: "status",
    title: "Status",
    description: "Place verification and status",
    icon: Activity,
    fields: placeFieldGroups.status,
  },
];