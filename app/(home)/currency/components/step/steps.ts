import { Info, Monitor, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { CurrencyFormSchema } from "../form/schema";
import { currencyFieldGroups } from "./field-groups";

export const currencySteps: FormWizardStep<CurrencyFormSchema>[] = [
  {
    id: "basic",

    title: "Basic",

    description: "Currency basic information",

    icon: Info,

    fields: currencyFieldGroups.basic,
  },

  {
    id: "display",

    title: "Display",

    description: "Currency display settings",

    icon: Monitor,

    fields: currencyFieldGroups.display,
  },

  {
    id: "status",

    title: "Status",

    description: "Currency status",

    icon: Activity,

    fields: currencyFieldGroups.status,
  },
];
