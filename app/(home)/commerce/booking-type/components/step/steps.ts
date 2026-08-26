import { Info, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { BookingTypeFormSchema } from "../form/schema";
import { bookingTypeFieldGroups } from "./field-groups";

export const bookingTypeSteps: FormWizardStep<BookingTypeFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Booking type information",
    icon: Info,
    fields: bookingTypeFieldGroups.basic,
  },

  {
    id: "status",
    title: "Status",
    description: "Booking type status",
    icon: Activity,
    fields: bookingTypeFieldGroups.status,
  },
];
