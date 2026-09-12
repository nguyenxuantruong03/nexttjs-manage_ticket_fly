import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { BlacklistEntryFormSchema, schema } from "./form/schema";

import { blacklistEntryDefaultValues } from "./form/default-values";

import { initBlacklistEntryFormValues } from "./form/init-value";

import { blacklistEntrySteps } from "./step/steps";
import { BlacklistEntry } from "@/types/common/commerce/risk-fraud.type";

export const blacklistEntryFormConfig: EntityFormWizardConfig<
  BlacklistEntryFormSchema,
  BlacklistEntry
> = {
  schema,

  defaultValues: blacklistEntryDefaultValues,

  initValues: initBlacklistEntryFormValues,

  steps: blacklistEntrySteps,

  draftEntity: DraftEntity.BlacklistEntry,

  messages: {
    create: "Blacklist entry created",

    update: "Blacklist entry updated",
  },

  redirectDefault: "/commerce/risk-fraud/blacklist-entry",
};
