import { Info, Settings } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { BrandFormSchema } from "../form/schema";
import { brandFieldGroups } from "./field-groups";

export const hotelBrandSteps: FormWizardStep<BrandFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Basic hotel brand information",
    icon: Info,

    fields: brandFieldGroups.basic,
  },
  {
    id: "settings",
    title: "Settings",
    description: "Hotel brand settings",
    icon: Settings,

    fields: brandFieldGroups.settings,
  },
];
