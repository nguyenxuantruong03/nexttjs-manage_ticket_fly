import { Info, Activity, Clock } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { BlacklistEntryFormSchema } from "../form/schema";

import { blacklistEntryFieldGroups } from "./field-groups";

export const blacklistEntrySteps: FormWizardStep<BlacklistEntryFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Blacklist entry information",
    icon: Info,
    fields: blacklistEntryFieldGroups.basic,
  },

  {
    id: "status",
    title: "Status",
    description: "Blacklist entry status",
    icon: Activity,
    fields: blacklistEntryFieldGroups.status,
  },

  {
    id: "expiration",
    title: "Expiration",
    description: "Blacklist entry expiration",
    icon: Clock,
    fields: blacklistEntryFieldGroups.expiration,
  },
];
