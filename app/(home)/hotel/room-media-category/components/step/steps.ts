import { Info, Settings } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { RoomMediaCategoryFormSchema } from "../form/schema";
import { roomMediaCategoryFieldGroups } from "./field-groups";

export const roomMediaCategorySteps: FormWizardStep<
  RoomMediaCategoryFormSchema
>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Basic room media category information",
    icon: Info,

    fields: roomMediaCategoryFieldGroups.basic,
  },
  {
    id: "settings",
    title: "Settings",
    description: "Room media category settings",
    icon: Settings,

    fields: roomMediaCategoryFieldGroups.settings,
  },
];