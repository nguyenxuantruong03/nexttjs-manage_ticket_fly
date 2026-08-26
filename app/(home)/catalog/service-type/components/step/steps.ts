import { Info, CalendarCheck, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { ServiceTypeFormSchema } from "../form/schema";

import { serviceTypeFieldGroups } from "./field-groups";

export const serviceTypeSteps: FormWizardStep<ServiceTypeFormSchema>[] = [
  {
    id: "basic",

    title: "Basic",

    description: "Service type information",

    icon: Info,

    fields: serviceTypeFieldGroups.basic,
  },

  {
    id: "booking-type",

    title: "Booking Type",

    description: "Service type booking configuration",

    icon: CalendarCheck,

    fields: serviceTypeFieldGroups.bookingType,
  },

  {
    id: "status",

    title: "Status",

    description: "Service type status",

    icon: Activity,

    fields: serviceTypeFieldGroups.status,
  },
];