import { FormWizardStep } from "@/components/form/wizard/types";

import { Info, Settings } from "lucide-react";
import { timezoneFieldGroups } from "./field-groups";
import { TimezoneFormSchema } from "../form/schema";

export const timezoneSteps: FormWizardStep<TimezoneFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Timezone basic information",
    icon: Info,
    fields: timezoneFieldGroups.basic,
  },
  {
    id: "status",
    title: "Status",
    description: "Timezone status settings",
    icon: Settings,
    fields: timezoneFieldGroups.status,
  },
];
