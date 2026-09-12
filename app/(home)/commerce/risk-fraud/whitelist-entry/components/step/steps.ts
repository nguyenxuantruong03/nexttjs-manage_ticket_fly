import { Info, Activity, Clock } from "lucide-react";

import { FormWizardStep } from "@/components/form/wizard/types";

import { WhitelistEntryFormSchema } from "../form/schema";

import { whitelistEntryFieldGroups } from "./field-groups";

export const whitelistEntrySteps: FormWizardStep<WhitelistEntryFormSchema>[] = [
  {
    id: "basic",
    title: "Basic",
    description: "Whitelist entry information",
    icon: Info,
    fields: whitelistEntryFieldGroups.basic,
  },
  {
    id: "status",
    title: "Status",
    description: "Whitelist entry status",
    icon: Activity,
    fields: whitelistEntryFieldGroups.status,
  },
  {
    id: "expiration",
    title: "Expiration",
    description: "Whitelist entry expiration",
    icon: Clock,
    fields: whitelistEntryFieldGroups.expiration,
  },
];
