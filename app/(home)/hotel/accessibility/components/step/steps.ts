import { Info } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { AccessibilityFormSchema } from "../form/schema";
import { accessibilityFieldGroups } from "./field-groups";

export const accessibilitySteps: FormWizardStep<AccessibilityFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Accessibility information",
    icon: Info,

    fields: accessibilityFieldGroups.basic,
  },
];
