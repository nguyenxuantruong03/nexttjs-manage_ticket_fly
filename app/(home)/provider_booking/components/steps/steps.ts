import { FormWizardStep } from "@/components/form/wizard/types";

import {
  Building2,
  Contact,
  Globe,
  MapPin,
  Settings,
  User,
} from "lucide-react";

export const providerBookingSteps: FormWizardStep[] = [
  {
    id: "basic",
    title: "Basic Information",
    description: "Provider basic details",
    icon: User,
  },

  {
    id: "company",
    title: "Company",
    description: "Company information",
    icon: Building2,
  },

  {
    id: "contact",
    title: "Contact",
    description: "Contact information",
    icon: Contact,
  },

  {
    id: "address",
    title: "Address",
    description: "Location information",
    icon: MapPin,
  },

  {
    id: "social",
    title: "Social",
    description: "Social links",
    icon: Globe,
  },

  {
    id: "service",
    title: "Service",
    description: "Provider services",
    icon: Settings,
  },
];
