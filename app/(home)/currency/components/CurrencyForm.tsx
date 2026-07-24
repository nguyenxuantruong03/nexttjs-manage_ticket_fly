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

import {
  useCreateCurrency,
  useUpdateCurrency,
} from "@/hooks/location/currency";
import { useSubmit } from "@/hooks/useSubmit";
import { Currency } from "@/types/bookings/location/currency";
import { initCurrencyFormValues } from "./form/init-value";
import { useFormPage } from "@/components/form/form-context";
import { useEffect } from "react";
import { useFormDraft } from "@/hooks/useFormDraft";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { DraftEntity } from "@/components/daft/draft-config";
interface CurrencyformProps {
  initialData?: Currency;
}
export default function CurrencyForm({ initialData }: CurrencyformProps) {
  const submit = useSubmit();
  const { setDirty } = useFormPage();
  const createCurrency = useCreateCurrency();
  const updateCurrency = useUpdateCurrency();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, mode, isUpdate } = useAppForm<CurrencyFormSchema>({
    schema,
    defaultValues: initialData
      ? initCurrencyFormValues(initialData)
      : currencyDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.Currency,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty]);

  const onSubmit = async (values: CurrencyFormSchema) => {
    await submit({
      mutation: initialData
        ? updateCurrency.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createCurrency.mutateAsync(values),
      success: isUpdate ? "Currency updated" : "Currency created",
      redirect: "/currency",
    });

    clearDraft();

    form.reset(values);
  };

  return (
    <>
      <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
        <FormWizard
          form={form}
          steps={currencySteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
        >
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

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
