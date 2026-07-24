import {
  Info,
  Ship,
  Anchor,
  CalendarRange,
  DollarSign,
  Package,
  FileText,
  Users,
  Images,
  Settings,
} from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { YachtFormSchema } from "../schema/core/yacht.schema";
import { yachtFieldGroups } from "./field-groups";

export const yachtSteps: FormWizardStep<YachtFormSchema>[] = [
  // ======================================================
  // BASIC
  // ======================================================
  {
    id: "basic",

    title: "Basic",

    description: "General yacht information",

    icon: Info,

    fields: yachtFieldGroups.basic,
  },

  // ======================================================
  // VEHICLE
  // ======================================================
  {
    id: "vehicle",

    title: "Vehicle",

    description: "Yacht specifications and facilities",

    icon: Ship,

    fields: yachtFieldGroups.vehicle,
  },

  // ======================================================
  // MARINA
  // ======================================================
  {
    id: "marina",

    title: "Marina",

    description: "Marina and departure information",

    icon: Anchor,

    fields: yachtFieldGroups.marina,
  },

  // ======================================================
  // ROUTES
  // ======================================================
  {
    id: "routes",

    title: "Routes",

    description: "Cruise routes and destinations",

    icon: Anchor,

    fields: yachtFieldGroups.routes,
  },

  // ======================================================
  // TRIPS
  // ======================================================
  {
    id: "trips",

    title: "Trips",

    description: "Trip schedules and availability",

    icon: CalendarRange,

    fields: yachtFieldGroups.trips,
  },

  // ======================================================
  // PRICING
  // ======================================================
  {
    id: "pricing",

    title: "Pricing",

    description: "Yacht pricing management",

    icon: DollarSign,

    fields: yachtFieldGroups.pricing,
  },

  // ======================================================
  // PACKAGES
  // ======================================================
  {
    id: "packages",

    title: "Packages",

    description: "Tour packages and inclusions",

    icon: Package,

    fields: yachtFieldGroups.packages,
  },

  // ======================================================
  // EXTRAS
  // ======================================================
  {
    id: "extras",

    title: "Extras",

    description: "Additional yacht services",

    icon: Package,

    fields: yachtFieldGroups.extras,
  },

  // ======================================================
  // POLICIES
  // ======================================================
  {
    id: "policies",

    title: "Policies",

    description: "Booking and passenger policies",

    icon: FileText,

    fields: yachtFieldGroups.policies,
  },

  // ======================================================
  // CREW
  // ======================================================
  {
    id: "crew",

    title: "Crew",

    description: "Crew members management",

    icon: Users,

    fields: yachtFieldGroups.crew,
  },

  // ======================================================
  // IMAGES
  // ======================================================
  {
    id: "images",

    title: "Images",

    description: "Yacht gallery",

    icon: Images,

    fields: yachtFieldGroups.images,
  },

  // ======================================================
  // SETTINGS
  // ======================================================
  {
    id: "settings",

    title: "Settings",

    description: "Search and visibility settings",

    icon: Settings,

    fields: yachtFieldGroups.settings,
  },
];
