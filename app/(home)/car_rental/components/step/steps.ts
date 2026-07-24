import { FormWizardStep } from "@/components/form/wizard/types";

import {
  Info,
  Car,
  Images,
  Route,
  ShieldCheck,
  Settings,
  Clock,
  FileText,
  Package,
} from "lucide-react";

import { carRentalFieldGroups } from "./field-groups";
import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export const carRentalSteps: FormWizardStep<CarRentalFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "General rental information",
    icon: Info,
    fields: carRentalFieldGroups.basic,
  },

  {
    id: "vehicles",
    title: "Vehicles",
    description: "Vehicle fleet management",
    icon: Car,
    fields: carRentalFieldGroups.vehicles,
  },

  {
    id: "images",
    title: "Images",
    description: "Rental & vehicle gallery",
    icon: Images,
    fields: carRentalFieldGroups.images,
  },

  {
    id: "trip",
    title: "Trip",
    description: "Pickup, dropoff and schedule",
    icon: Route,
    fields: carRentalFieldGroups.trip,
  },

  {
    id: "pricing",
    title: "Pricing",
    description: "Rental prices and extras",
    icon: Package,
    fields: carRentalFieldGroups.pricing,
  },

  {
    id: "insurance",
    title: "Insurance",
    description: "Insurance plans and benefits",
    icon: ShieldCheck,
    fields: carRentalFieldGroups.insurance,
  },

  {
    id: "policies",
    title: "Policies",
    description: "Rental rules and restrictions",
    icon: FileText,
    fields: carRentalFieldGroups.policies,
  },

  {
    id: "operation",
    title: "Operation",
    description: "Business operation settings",
    icon: Settings,
    fields: carRentalFieldGroups.operation,
  },

  {
    id: "availability",
    title: "Availability",
    description: "Vehicle availability management",
    icon: Clock,
    fields: carRentalFieldGroups.availability,
  },
];
