import { Info, CalendarCheck, Activity } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { VehicleTypeFormSchema } from "../form/schema";
import { vehicleTypeFieldGroups } from "./field-groups";

export const vehicleTypeSteps: FormWizardStep<VehicleTypeFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Vehicle type information",
    icon: Info,
    fields: vehicleTypeFieldGroups.basic,
  },

  {
    id: "booking-type",
    title: "Booking Type",
    description: "Vehicle type booking configuration",
    icon: CalendarCheck,
    fields: vehicleTypeFieldGroups.bookingType,
  },

  {
    id: "status",
    title: "Status",
    description: "Vehicle type status",
    icon: Activity,
    fields: vehicleTypeFieldGroups.status,
  },
];