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
  UserRound,
  ClipboardList,
  MapPin,
  FolderCheck,
} from "lucide-react";

import { carRentalFieldGroups } from "./field-groups";
import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

export const carRentalSteps: FormWizardStep<CarRentalFormSchema>[] = [
  // ======================================================
  // 1. AVAILABILITY
  // ======================================================
  {
    id: "availability",
    title: "Availability",
    description: "Vehicle availability management",
    icon: Clock,
    fields: carRentalFieldGroups.availability,
  },

  // ======================================================
  // 2. BASIC
  // ======================================================
  {
    id: "basic",
    title: "Basic",
    description: "General rental information",
    icon: Info,
    fields: carRentalFieldGroups.basic,
  },

  // ======================================================
  // 3. DRIVER
  // ======================================================
  {
    id: "driver",
    title: "Driver",
    description: "Driver requirements and management",
    icon: UserRound,
    fields: carRentalFieldGroups.driver,
  },

  // ======================================================
  // 4. INSURANCE
  // ======================================================
  {
    id: "insurance",
    title: "Insurance",
    description: "Insurance plans and benefits",
    icon: ShieldCheck,
    fields: carRentalFieldGroups.insurance,
  },

  // ======================================================
  // 5. MEDIA
  // ======================================================
  {
    id: "media",
    title: "Media",
    description: "Rental and vehicle media",
    icon: Images,
    fields: carRentalFieldGroups.media,
  },

  // ======================================================
  // 6. OPERATION
  // ======================================================
  {
    id: "operation",
    title: "Operation",
    description: "Business operation settings",
    icon: Settings,
    fields: carRentalFieldGroups.operation,
  },

  // ======================================================
  // 7. PACKAGE
  // ======================================================
  {
    id: "package",
    title: "Package",
    description: "Rental packages and included services",
    icon: Package,
    fields: carRentalFieldGroups.package,
  },

  // ======================================================
  // 8. PICKUP INSTRUCTIONS
  // ======================================================
  {
    id: "pickup-instructions",
    title: "Pickup Instructions",
    description: "Pickup locations and customer instructions",
    icon: MapPin,
    fields: carRentalFieldGroups["pickup-instructions"],
  },

  // ======================================================
  // 9. POLICIES
  // ======================================================
  {
    id: "policies",
    title: "Policies",
    description: "Rental rules and restrictions",
    icon: FileText,
    fields: carRentalFieldGroups.policies,
  },

  // ======================================================
  // 10. PRICING
  // ======================================================
  {
    id: "pricing",
    title: "Pricing",
    description: "Rental prices and extras",
    icon: Package,
    fields: carRentalFieldGroups.pricing,
  },

  // ======================================================
  // 11. REQUIRED DOCUMENTS
  // ======================================================
  {
    id: "required-documents",
    title: "Required Documents",
    description: "Documents required for rental",
    icon: ClipboardList,
    fields: carRentalFieldGroups["required-documents"],
  },

  // ======================================================
  // 12. TRIP
  // ======================================================
  {
    id: "trip",
    title: "Trip",
    description: "Pickup, dropoff and rental schedule",
    icon: Route,
    fields: carRentalFieldGroups.trip,
  },

  // ======================================================
  // 13. VEHICLES
  // ======================================================
  {
    id: "vehicles",
    title: "Vehicles",
    description: "Vehicle fleet management",
    icon: Car,
    fields: carRentalFieldGroups.vehicles,
  },
];