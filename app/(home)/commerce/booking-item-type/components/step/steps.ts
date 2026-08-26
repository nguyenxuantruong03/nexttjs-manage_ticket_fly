import { Info, CalendarCheck, Settings, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { BookingItemTypeFormSchema } from "../form/schema";

import { bookingItemTypeFieldGroups } from "./field-groups";

export const bookingItemTypeSteps: FormWizardStep<BookingItemTypeFormSchema>[] =
  [
    {
      id: "basic",

      title: "Basic",

      description: "Booking item type information",

      icon: Info,

      fields: bookingItemTypeFieldGroups.basic,
    },

    {
      id: "booking-type",

      title: "Booking Type",

      description: "Configure the booking type",

      icon: CalendarCheck,

      fields: bookingItemTypeFieldGroups.bookingType,
    },

    {
      id: "status",

      title: "Status",

      description: "Booking item type status",

      icon: Activity,

      fields: bookingItemTypeFieldGroups.status,
    },
  ];
