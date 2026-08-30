import { FormWizardStep } from "@/components/form/wizard/types";

import {
  CalendarCheck,
  Info,
  Gauge,
  PackagePlus,
  Package,
  ShieldCheck,
  DollarSign,
  Route,
  Search,
  Settings,
  CalendarRange,
  Car,
} from "lucide-react";

import { airportTransferFieldGroups } from "./field-groups";
import { AirportTransferFormSchema } from "../form/schema/core/schema";

export const airportTransferSteps: FormWizardStep<AirportTransferFormSchema>[] =
  [
    // =====================================================
    // AVAILABILITY
    // =====================================================

    {
      id: "availability",
      title: "Availability",
      description: "Inventory availability and blackout dates",
      icon: CalendarCheck,
      fields: airportTransferFieldGroups.availability,
    },

    // =====================================================
    // BASIC
    // =====================================================

    {
      id: "basic",
      title: "Basic",
      description: "General information",
      icon: Info,
      fields: airportTransferFieldGroups.basic,
    },

    // =====================================================
    // CAPACITY
    // =====================================================

    {
      id: "capacity",
      title: "Capacity",
      description: "Operation limits",
      icon: Gauge,
      fields: airportTransferFieldGroups.capacity,
    },

    // =====================================================
    // EXTRAS
    // =====================================================

    {
      id: "extras",
      title: "Extras",
      description: "Additional services & charges",
      icon: PackagePlus,
      fields: airportTransferFieldGroups.extras,
    },

    // =====================================================
    // PACKAGE
    // =====================================================

    {
      id: "package",
      title: "Package",
      description: "Associated package",
      icon: Package,
      fields: airportTransferFieldGroups.package,
    },

    // =====================================================
    // POLICIES
    // =====================================================

    {
      id: "policies",
      title: "Policies",
      description: "Policy configuration",
      icon: ShieldCheck,
      fields: airportTransferFieldGroups.policies,
    },

    // =====================================================
    // PRICING
    // =====================================================

    {
      id: "pricing",
      title: "Pricing",
      description: "Price configuration",
      icon: DollarSign,
      fields: airportTransferFieldGroups.pricing,
    },

    // =====================================================
    // ROUTE
    // =====================================================

    {
      id: "route",
      title: "Route",
      description: "Departure and arrival routes",
      icon: Route,
      fields: airportTransferFieldGroups.route,
    },

    // =====================================================
    // SEO
    // =====================================================

    {
      id: "seo",
      title: "SEO",
      description: "Search optimization",
      icon: Search,
      fields: airportTransferFieldGroups.seo,
    },

    // =====================================================
    // SERVICE
    // =====================================================

    {
      id: "service",
      title: "Service",
      description: "Additional services",
      icon: Settings,
      fields: airportTransferFieldGroups.service,
    },

    // =====================================================
    // TRIP
    // =====================================================

    {
      id: "trip",
      title: "Trip",
      description: "Trip schedule and vehicle assignment",
      icon: CalendarRange,
      fields: airportTransferFieldGroups.trip,
    },

    // =====================================================
    // VEHICLE
    // =====================================================

    {
      id: "vehicle",
      title: "Vehicle",
      description: "Vehicle information",
      icon: Car,
      fields: airportTransferFieldGroups.vehicle,
    },
  ];
