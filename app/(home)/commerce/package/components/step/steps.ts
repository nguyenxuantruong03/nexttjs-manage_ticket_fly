import {
  Info,
  CalendarCheck,
  Clock,
  Users,
  DollarSign,
  FileText,
  Image,
  Activity,
} from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { PackageFormSchema } from "../form/schema";

import { packageFieldGroups } from "./field-groups";

export const packageSteps: FormWizardStep<PackageFormSchema>[] = [
  {
    id: "basic",

    title: "Basic",

    description: "Package basic information",

    icon: Info,

    fields: packageFieldGroups.basic,
  },

  {
    id: "booking-type",

    title: "Booking Type",

    description: "Package booking type configuration",

    icon: CalendarCheck,

    fields: packageFieldGroups.bookingType,
  },

  {
    id: "duration",

    title: "Duration",

    description: "Package duration configuration",

    icon: Clock,

    fields: packageFieldGroups.duration,
  },

  {
    id: "capacity",

    title: "Capacity",

    description: "Package guest capacity configuration",

    icon: Users,

    fields: packageFieldGroups.capacity,
  },

  {
    id: "base-price",

    title: "Base Price",

    description: "Package base price configuration",

    icon: DollarSign,

    fields: packageFieldGroups.basePrice,
  },

  {
    id: "content",

    title: "Content",

    description: "Package included items",

    icon: FileText,

    fields: packageFieldGroups.content,
  },

  {
    id: "media",

    title: "Media",

    description: "Package images",

    icon: Image,

    fields: packageFieldGroups.media,
  },

  {
    id: "status",

    title: "Status",

    description: "Package status configuration",

    icon: Activity,

    fields: packageFieldGroups.status,
  },
];
