"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicStep from "./step/basic.step";

import ExpirationStep from "./step/expiration.step";

import StatusStep from "./step/status.step";

import { blacklistEntryFormConfig } from "./config";

import { BlacklistEntryFormSchema } from "./form/schema";
import {
  useCreateBlacklistEntry,
  useUpdateBlacklistEntry,
} from "@/hooks/commerce/risk-fraud/blacklist-entry";
import { BlacklistEntry } from "@/types/common/commerce/risk-fraud.type";

interface BlacklistEntryFormProps {
  initialData?: BlacklistEntry;

  redirect?: boolean;
}

export default function BlacklistEntryForm({
  initialData,
  redirect = true,
}: BlacklistEntryFormProps) {
  const createBlacklistEntry = useCreateBlacklistEntry();

  const updateBlacklistEntry = useUpdateBlacklistEntry();

  return (
    <EntityFormWizard<BlacklistEntryFormSchema, BlacklistEntry>
      initialData={initialData}
      redirect={redirect}
      config={blacklistEntryFormConfig}
      createMutation={createBlacklistEntry}
      updateMutation={updateBlacklistEntry}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <StatusStep />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <ExpirationStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
