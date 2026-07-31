import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, MapPinned, Images } from "lucide-react";
import { languageFieldGroups } from "./field-groups";
import { LanguageFormSchema } from "../form/schema";

export const languageSteps: FormWizardStep<LanguageFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Language basic information",
    icon: Info,

    fields: languageFieldGroups.basic,
  },

  {
    id: "location",
    title: "Location",
    description: "Geography & country information",
    icon: MapPinned,

    fields: languageFieldGroups.location,
  },
];
