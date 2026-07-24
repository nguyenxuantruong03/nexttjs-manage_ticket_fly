import { FormWizardStep } from "@/components/form/wizard/types";

import {
  Info,
  Route,
  Car,
  DollarSign,
  CalendarRange,
  Settings,
} from "lucide-react";

import { airportTransferFieldGroups } from "./field-groups";
import { AirportTransferFormSchema } from "../schema/core/schema";

export const airportTransferSteps: FormWizardStep<AirportTransferFormSchema>[] =
  [
    {
      id: "basic",
      title: "Basic",
      description: "General information",
      icon: Info,
      fields: airportTransferFieldGroups.basic,
    },

    {
      id: "route",
      title: "Route",
      description: "Departure and arrival routes",
      icon: Route,
      fields: airportTransferFieldGroups.route,
    },

    {
      id: "vehicle",
      title: "Vehicle",
      description: "Vehicle information",
      icon: Car,
      fields: airportTransferFieldGroups.vehicle,
    },

    {
      id: "pricing",
      title: "Pricing",
      description: "Price configuration",
      icon: DollarSign,
      fields: airportTransferFieldGroups.pricing,
    },

    {
      id: "trip",
      title: "Trip & Availability",
      description: "Trip schedule and inventory",
      icon: CalendarRange,
      fields: airportTransferFieldGroups.trip,
    },

    {
      id: "service",
      title: "Service",
      description: "Additional services",
      icon: Settings,
      fields: airportTransferFieldGroups.service,
    },
  ];
