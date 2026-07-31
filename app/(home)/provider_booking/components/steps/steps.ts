import {
  Building2,
  Contact,
  Globe,
  Settings,
  User,
} from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { ProviderBookingFormSchema } from "../form/schema";
import { providerBookingFieldGroups } from "./field-groups";

export const providerBookingSteps: FormWizardStep<ProviderBookingFormSchema>[] =
  [
    {
      id: "basic",

      title: "Basic Information",

      description: "Provider basic details",

      icon: User,

      fields: providerBookingFieldGroups.basic,
    },

    {
      id: "company",

      title: "Company",

      description: "Company information",

      icon: Building2,

      fields: providerBookingFieldGroups.company,
    },

    {
      id: "contact",

      title: "Contact",

      description: "Contact information",

      icon: Contact,

      fields: providerBookingFieldGroups.contact,
    },

    {
      id: "social",

      title: "Social",

      description: "Social media links",

      icon: Globe,

      fields: providerBookingFieldGroups.social,
    },

    {
      id: "service",

      title: "Service",

      description: "Provider services configuration",

      icon: Settings,

      fields: providerBookingFieldGroups.service,
    },
  ];
