"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import BasicStep from "./step/basic.step";

import RolloutStep from "./step/expiration.step";

import StatusStep from "./step/status.step";

import { whitelistEntryFormConfig } from "./config";

import { WhitelistEntryFormSchema } from "./form/schema";
import { WhitelistEntry } from "@/types/common/commerce/risk-fraud.type";
import {
  useCreateWhitelistEntry,
  useUpdateWhitelistEntry,
} from "@/hooks/commerce/risk-fraud/whitelist-entry";

interface WhitelistEntryFormProps {
  initialData?: WhitelistEntry;

  redirect?: boolean;
}

export default function WhitelistEntryForm({
  initialData,
  redirect = true,
}: WhitelistEntryFormProps) {
  const createWhitelistEntry = useCreateWhitelistEntry();

  const updateWhitelistEntry = useUpdateWhitelistEntry();

  return (
    <EntityFormWizard<WhitelistEntryFormSchema, WhitelistEntry>
      initialData={initialData}
      redirect={redirect}
      config={whitelistEntryFormConfig}
      createMutation={createWhitelistEntry}
      updateMutation={updateWhitelistEntry}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <RolloutStep />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
