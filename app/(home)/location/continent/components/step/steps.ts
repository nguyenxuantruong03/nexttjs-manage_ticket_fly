import { FormWizardStep } from "@/components/form/wizard/types";

import {
  Info,
  Images,
  ListOrdered,
  Activity,
} from "lucide-react";

import { continentFieldGroups } from "./field-groups";

import { ContinentFormSchema } from "../form/schema";

export const continentSteps: FormWizardStep<ContinentFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Continent basic information",
    icon: Info,
    fields: continentFieldGroups.basic,
  },

  {
    id: "media",
    title: "Media",
    description: "Continent images",
    icon: Images,
    fields: continentFieldGroups.media,
  },

  {
    id: "display",
    title: "Display",
    description: "Continent display settings",
    icon: ListOrdered,
    fields: continentFieldGroups.display,
  },

  {
    id: "status",
    title: "Status",
    description: "Continent visibility",
    icon: Activity,
    fields: continentFieldGroups.status,
  },
];