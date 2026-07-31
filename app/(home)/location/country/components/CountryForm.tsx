"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";

import { CountrySchema, CountryFormSchema } from "./form/schema";

import { countryDefaultValues } from "./form/default-values";

import { countrySteps } from "./step/steps";

import BasicStep from "./step/basic.step";
import LocationStep from "./step/location.step";
import MediaStep from "./step/media.step";
import SearchStep from "./step/search.step";
import StatusStep from "./step/status.step";

import { useCreateCountry, useUpdateCountry } from "@/hooks/location/country";
import { useSubmit } from "@/hooks/useSubmit";
import { useEffect, useMemo, useRef } from "react";
import { useFormPage } from "@/components/form/form-context";
import { useFormDraft } from "@/hooks/useFormDraft";
import { useSearchParams } from "next/navigation";
import { DraftEntity } from "@/components/daft/draft-config";
import { Country } from "@/types/bookings/location/country";
import { initCountryFormValues } from "./form/init-value";
import { Currency } from "@/types/bookings/location/currency";
import { SearchTag } from "@/types/bookings/search/tag.types";
import { Timezone } from "@/types/bookings/location/timezone";
import { Language } from "@/types/bookings/location/language";
import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";
import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";

interface CountryFormProps {
  initialData?: Country;
  currencyData?: Currency[];
  searchTagData: SearchTag[];
  timezoneData: Timezone[];
  languageData: Language[];
  redirect?: boolean;
}

export default function CountryForm({
  initialData,
  currencyData,
  searchTagData,
  timezoneData,
  languageData,
  redirect = true,
}: CountryFormProps) {
  const redirectDefault = "/country";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const submit = useSubmit();
  const { setDirty } = useFormPage();
  const createCountry = useCreateCountry();
  const updatedCountry = useUpdateCountry();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, mode, isUpdate } = useAppForm<CountryFormSchema>({
    schema: CountrySchema,
    defaultValues: initialData
      ? initCountryFormValues(initialData)
      : countryDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.Country,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty]);

  const onSubmit = (values: CountryFormSchema) => {
    submit({
      mutation: initialData
        ? updatedCountry.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createCountry.mutateAsync(values),
      success: isUpdate ? "Country updated" : "Country created",
      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(countryDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(countryDefaultValues);
  };

  return (
    <>
      <ConfirmRedirectDialog
        redirectDefault={redirectDefault}
        confirmDialog={confirmDialog}
        shouldShow={shouldShow}
        cancelDialog={cancelDialog}
      />

      <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
        <FormWizard
          form={form}
          steps={countrySteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={countrySteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep />
            </FormWizardStep>

            <FormWizardStep index={1}>
              <LocationStep
                currencyData={currencyData}
                timezoneData={timezoneData}
                languageData={languageData}
              />
            </FormWizardStep>

            <FormWizardStep index={2}>
              <MediaStep />
            </FormWizardStep>

            <FormWizardStep index={3}>
              <SearchStep searchTagData={searchTagData} />
            </FormWizardStep>

            <FormWizardStep index={4}>
              <StatusStep />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
