import { Info, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { SearchTagFormSchema } from "../form/schema";
import { searchTagFieldGroups } from "./field-groups";

export const searchtTagSteps: FormWizardStep<SearchTagFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Tag information",
    icon: Info,
    fields: searchTagFieldGroups.basic,
  },

  {
    id: "status",
    title: "Status",
    description: "Tag status",
    icon: Activity,
    fields: searchTagFieldGroups.status,
  },
];
