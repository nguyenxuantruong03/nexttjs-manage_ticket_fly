"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateCurrency,
  useUpdateCurrency,
} from "@/hooks/location/currency";

import { Currency } from "@/types/location/currency";

import { CurrencyFormSchema } from "./form/schema";

import { currencyFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import DisplayStep from "./step/display.step";

import MediaStep from "./step/media.step";

import StatusStep from "./step/status.step";

interface CurrencyFormProps {
  initialData?: Currency;

  redirect?: boolean;
}

export default function CurrencyForm({
  initialData,

  redirect = true,
}: CurrencyFormProps) {
  const createCurrency = useCreateCurrency();

  const updateCurrency = useUpdateCurrency();

  return (
    <EntityFormWizard<CurrencyFormSchema, Currency>
      initialData={initialData}
      redirect={redirect}
      config={currencyFormConfig}
      createMutation={createCurrency}
      updateMutation={updateCurrency}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <DisplayStep />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <MediaStep />
      </FormWizardStep>

      <FormWizardStep index={3}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
