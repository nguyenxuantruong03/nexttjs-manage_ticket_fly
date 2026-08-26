import { Info, CalendarCheck, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { FuelTypeFormSchema } from "../form/schema";
import { fuelTypeFieldGroups } from "./field-groups";

export const fuelTypeSteps: FormWizardStep<FuelTypeFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Fuel type information",
    icon: Info,
    fields: fuelTypeFieldGroups.basic,
  },

  {
    id: "booking-type",
    title: "Booking Type",
    description: "Fuel type booking configuration",
    icon: CalendarCheck,
    fields: fuelTypeFieldGroups.bookingType,
  },

  {
    id: "status",
    title: "Status",
    description: "Fuel type status",
    icon: Activity,
    fields: fuelTypeFieldGroups.status,
  },
];