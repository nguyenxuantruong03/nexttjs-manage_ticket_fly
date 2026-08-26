import { FormWizardStep } from "@/components/form/wizard/types";

import {
  Info,
  Plane,
  Route,
  Ticket,
  DollarSign,
  FileText,
  Images,
  CalendarRange,
  Search,
  Package,
  ShieldCheck,
  Gift,
} from "lucide-react";

import { flyFieldGroups } from "./field-groups";
import { FlyFormSchema } from "../schema/core/fly.schema";

export const flySteps: FormWizardStep<FlyFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Basic flight information",
    icon: Info,
    fields: flyFieldGroups.basic,
  },

  {
    id: "airline",
    title: "Airline",
    description: "Airline information",
    icon: Plane,
    fields: flyFieldGroups.airline,
  },

  {
    id: "extras",
    title: "Extras",
    description: "Flight extra mapping",
    icon: Gift,
    fields: flyFieldGroups.flyExtraMapper,
  },

  {
    id: "packages",
    title: "Packages",
    description: "Flight package mapping",
    icon: Package,
    fields: flyFieldGroups.flyPackageMapper,
  },

  {
    id: "policies",
    title: "Policies",
    description: "Flight policies",
    icon: ShieldCheck,
    fields: flyFieldGroups.policies,
  },

  {
    id: "routes",
    title: "Routes",
    description: "Flight routes and segments",
    icon: Route,
    fields: flyFieldGroups.routes,
  },

  {
    id: "trips",
    title: "Trips",
    description: "Flight trips and operations",
    icon: Ticket,
    fields: flyFieldGroups.trips,
  },

  {
    id: "pricing",
    title: "Pricing",
    description: "Fare and pricing",
    icon: DollarSign,
    fields: flyFieldGroups.pricing,
  },


  {
    id: "notice",
    title: "Notice",
    description: "Flight notices",
    icon: FileText,
    fields: flyFieldGroups.notice,
  },

  {
    id: "images",
    title: "Images",
    description: "Flight images",
    icon: Images,
    fields: flyFieldGroups.images,
  },

  {
    id: "schedule",
    title: "Schedule",
    description: "Flight schedule",
    icon: CalendarRange,
    fields: flyFieldGroups.schedule,
  },

  {
    id: "seo",
    title: "SEO",
    description: "Search metadata",
    icon: Search,
    fields: flyFieldGroups.seo,
  },

];
