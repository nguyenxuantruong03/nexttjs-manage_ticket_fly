import { Info, Settings } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { MediaCategoryFormSchema } from "../form/schema";
import { mediaCategoryFieldGroups } from "./field-groups";

export const mediaCategorySteps: FormWizardStep<MediaCategoryFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Basic media category information",
    icon: Info,

    fields: mediaCategoryFieldGroups.basic,
  },
  {
    id: "settings",
    title: "Settings",
    description: "Media category settings",
    icon: Settings,

    fields: mediaCategoryFieldGroups.settings,
  },
];
