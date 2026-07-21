import { FormWizardStep } from "@/components/form/wizard/types";

import {
  Info,
  Route,
  Car,
  DollarSign,
  CalendarRange,
  Settings,
  ClipboardCheck,
} from "lucide-react";

export const airportTransferSteps: FormWizardStep[] = [
  {
    id: "basic",
    title: "Basic",
    description: "General information",
    icon: Info,
  },

  {
    id: "route",
    title: "Route",
    description: "Departure and arrival routes",
    icon: Route,
  },

  {
    id: "vehicle",
    title: "Vehicle",
    description: "Vehicle information",
    icon: Car,
  },

  {
    id: "pricing",
    title: "Pricing",
    description: "Price configuration",
    icon: DollarSign,
  },

  {
    id: "trip",
    title: "Trip & Availability",
    description: "Trip schedule and inventory",
    icon: CalendarRange,
  },

  {
    id: "service",
    title: "Service",
    description: "Additional services",
    icon: Settings,
  },

 
];
