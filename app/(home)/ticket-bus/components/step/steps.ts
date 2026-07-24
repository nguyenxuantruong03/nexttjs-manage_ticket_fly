import { FormWizardStep } from "@/components/form/wizard/types";

import {
  Info,
  Route,
  Bus,
  Armchair,
  DollarSign,
  FileText,
  Images,
  CalendarRange,
} from "lucide-react";

import { busFieldGroups } from "./field-groups";
import { BusFormSchema } from "../schema/core/bus.schema";

export const busSteps: FormWizardStep<BusFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "General bus information",
    icon: Info,
    fields: busFieldGroups.basic,
  },

  {
    id: "routes",
    title: "Routes",
    description: "Routes, boarding & trips",
    icon: Route,
    fields: busFieldGroups.routes,
  },

  {
    id: "vehicles",
    title: "Vehicles",
    description: "Bus vehicles & specifications",
    icon: Bus,
    fields: busFieldGroups.vehicles,
  },

  {
    id: "seats",
    title: "Seats",
    description: "Seat layouts & availability",
    icon: Armchair,
    fields: busFieldGroups.seats,
  },

  {
    id: "pricing",
    title: "Pricing",
    description: "Prices & pricing rules",
    icon: DollarSign,
    fields: busFieldGroups.pricing,
  },

  {
    id: "policies",
    title: "Policies",
    description: "Passenger & ticket policies",
    icon: FileText,
    fields: busFieldGroups.policies,
  },

  {
    id: "images",
    title: "Images",
    description: "Bus gallery",
    icon: Images,
    fields: busFieldGroups.images,
  },

  {
    id: "schedule",
    title: "Schedule",
    description: "Trip schedules",
    icon: CalendarRange,
    fields: busFieldGroups.schedule,
  },
];
