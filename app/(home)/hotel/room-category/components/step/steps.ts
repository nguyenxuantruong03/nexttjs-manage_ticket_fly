import { Info, Settings } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { RoomCategoryFormSchema } from "../form/schema";
import { roomCategoryFieldGroups } from "./field-groups";

export const roomCategorySteps: FormWizardStep<
  RoomCategoryFormSchema
>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Basic room category information",
    icon: Info,

    fields: roomCategoryFieldGroups.basic,
  },
  {
    id: "settings",
    title: "Settings",
    description: "Room category settings",
    icon: Settings,

    fields: roomCategoryFieldGroups.settings,
  },
];