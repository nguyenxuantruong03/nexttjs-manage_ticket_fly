"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";

import { CurrencyFormSchema, schema } from "./form/schema";

import { currencyDefaultValues } from "./form/default-values";

import { currencySteps } from "./step/steps";

import BasicStep from "./step/basic.step";
import DisplayStep from "./step/display.step";
import StatusStep from "./step/status.step";

import { useCreateCurrency } from "@/hooks/location/currency";
import { useSubmit } from "@/hooks/useSubmit";

export default function CurrencyForm() {
  const submit = useSubmit();

  const createCurrency = useCreateCurrency();

  const { form, mode, isUpdate } = useAppForm<CurrencyFormSchema>({
    schema,
    defaultValues: currencyDefaultValues,
  });

  const onSubmit = (values: CurrencyFormSchema) =>
    submit({
      mutation: createCurrency.mutateAsync(values),
      success: "Currency created",
      redirect: "/currency",
    });

  return (
    <AppForm form={form} onSubmit={onSubmit}>
      <FormWizard steps={currencySteps}>
        <FormWizardHeader steps={currencySteps} />

        <FormWizardContent>
          <FormWizardStep index={0}>
            <BasicStep />
          </FormWizardStep>

          <FormWizardStep index={1}>
            <DisplayStep />
          </FormWizardStep>

          <FormWizardStep index={2}>
            <StatusStep />
          </FormWizardStep>
        </FormWizardContent>

        <FormWizardFooter />
      </FormWizard>
    </AppForm>
  );
}
