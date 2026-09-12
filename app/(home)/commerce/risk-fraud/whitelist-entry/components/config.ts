import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { WhitelistEntryFormSchema, schema } from "./form/schema";

import { whitelistEntryDefaultValues } from "./form/default-values";

import { initWhitelistEntryFormValues } from "./form/init-value";

import { whitelistEntrySteps } from "./step/steps";
import { WhitelistEntry } from "@/types/common/commerce/risk-fraud.type";

export const whitelistEntryFormConfig: EntityFormWizardConfig<
  WhitelistEntryFormSchema,
  WhitelistEntry
> = {
  schema,

  defaultValues: whitelistEntryDefaultValues,

  initValues: initWhitelistEntryFormValues,

  steps: whitelistEntrySteps,

  draftEntity: DraftEntity.WhitelistEntry,

  messages: {
    create: "Whitelist entry created",

    update: "Whitelist entry updated",
  },

  redirectDefault: "/commerce/risk-fraud/whitelist-entry",
};
