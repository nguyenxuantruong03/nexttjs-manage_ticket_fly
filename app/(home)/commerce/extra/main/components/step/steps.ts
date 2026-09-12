import {
  Info,
  Activity,
  CalendarCheck,
  Tags,
  DollarSign,
  Image,
} from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { ExtraFormSchema } from "../form/schema";

import { extraFieldGroups } from "./field-groups";

export const extraSteps: FormWizardStep<ExtraFormSchema>[] = [
  {
    id: "basic",

    title: "Basic",

    description: "Extra information",

    icon: Info,

    fields: extraFieldGroups.basic,
  },

  {
    id: "booking-type",

    title: "Booking Type",

    description: "Configure the booking type",

    icon: CalendarCheck,

    fields: extraFieldGroups.bookingType,
  },

  {
    id: "type",

    title: "Extra Type",

    description: "Configure the extra type",

    icon: Tags,

    fields: extraFieldGroups.extraType,
  },

  {
    id: "pricing",

    title: "Pricing",

    description: "Configure the extra pricing",

    icon: DollarSign,

    fields: extraFieldGroups.pricing,
  },

  {
    id: "media",

    title: "Media",

    description: "Manage extra images",

    icon: Image,

    fields: extraFieldGroups.media,
  },

  {
    id: "status",

    title: "Status",

    description: "Extra status",

    icon: Activity,

    fields: extraFieldGroups.status,
  },
];
