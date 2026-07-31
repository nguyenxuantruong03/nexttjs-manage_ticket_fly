import { Info, Settings } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { RoomViewFormSchema } from "../form/schema";
import { roomViewFieldGroups } from "./field-groups";

export const roomViewSteps: FormWizardStep<RoomViewFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Basic room view information",
    icon: Info,

    fields: roomViewFieldGroups.basic,
  },
  {
    id: "settings",
    title: "Settings",
    description: "Room view settings",
    icon: Settings,

    fields: roomViewFieldGroups.settings,
  },
];
