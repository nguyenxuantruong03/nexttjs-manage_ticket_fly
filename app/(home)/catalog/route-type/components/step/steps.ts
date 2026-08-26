import { Info, CalendarCheck, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { RouteTypeFormSchema } from "../form/schema";

import { routeTypeFieldGroups } from "./field-groups";

export const routeTypeSteps: FormWizardStep<RouteTypeFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Route type information",
    icon: Info,
    fields: routeTypeFieldGroups.basic,
  },
  {
    id: "booking-type",
    title: "Booking Type",
    description: "Route type booking configuration",
    icon: CalendarCheck,
    fields: routeTypeFieldGroups.bookingType,
  },
  {
    id: "status",
    title: "Status",
    description: "Route type status",
    icon: Activity,
    fields: routeTypeFieldGroups.status,
  },
];