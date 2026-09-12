import { Settings2 } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { SystemSettingFormSchema } from "../form/schema";

import { systemSettingFieldGroups } from "./field-groups";

export const systemSettingSteps: FormWizardStep<SystemSettingFormSchema>[] = [
  {
    id: "basic",

    title: "Basic Information",

    description: "System setting configuration",

    icon: Settings2,

    fields: systemSettingFieldGroups.basic,
  },
];
