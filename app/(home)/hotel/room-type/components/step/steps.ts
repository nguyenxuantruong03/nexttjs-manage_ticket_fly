import {
  Bed,
  Building2,
  Info,
  Settings,
  Users,
} from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { RoomTypeFormSchema } from "../form/schema";
import { roomTypeFieldGroups } from "./field-groups";

export const roomTypeSteps: FormWizardStep<RoomTypeFormSchema>[] = [
  {
    id: "relation",
    title: "Relation",
    description: "Hotel and room relations",
    icon: Building2,

    fields: roomTypeFieldGroups.relation,
  },
  {
    id: "basic",
    title: "Basic",
    description: "Basic room type information",
    icon: Info,

    fields: roomTypeFieldGroups.basic,
  },
  {
    id: "room",
    title: "Room",
    description: "Room specifications",
    icon: Bed,

    fields: roomTypeFieldGroups.room,
  },
  {
    id: "capacity",
    title: "Capacity",
    description: "Guest capacity",
    icon: Users,

    fields: roomTypeFieldGroups.capacity,
  },
  {
    id: "features",
    title: "Features",
    description: "Room features and settings",
    icon: Settings,

    fields: roomTypeFieldGroups.features,
  },
];
