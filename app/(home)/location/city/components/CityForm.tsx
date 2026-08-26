"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import { CitySchema, CityFormSchema } from "./form/schema";

import { cityDefaultValues } from "./form/default-values";

import { citySteps } from "./step/steps";

import BasicStep from "./step/basic.step";
import LocationStep from "./step/location.step";
import MediaStep from "./step/media.step";
import SearchStep from "./step/search.step";
import TravelStep from "./step/travel.step";
import StatusStep from "./step/status.step";

import { useCreateCity, useUpdateCity } from "@/hooks/location/city";
import { useEffect, useMemo, useRef } from "react";
import { useFormPage } from "@/components/form/form-context";
import { useSearchParams } from "next/navigation";
import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";
import { initCityFormValues } from "./form/init-value";
import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";
import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";
import { City } from "@/types/location/city";
import { Country } from "@/types/location/country/country";
import { SearchTag } from "@/types/searchs/search/tag.types";
import { Timezone } from "@/types/location/timezone";
import { Language } from "@/types/location/language";
import { Currency } from "@/types/location/currency";
import { BookingType } from "@/types/common/commerce/booking-type";
import { Continent } from "@/types/location/country/continent.type";

interface CityFormProps {
  initialData?: City;
  countryData?: Country[];
  searchTagData: SearchTag[];
  timezoneData: Timezone[];
  languageData: Language[];
  currencyData: Currency[];
  bookingTypeData: BookingType[];
  continentData: Continent[]
  redirect?: boolean;
}

export default function CityForm({
  initialData,
  countryData,
  searchTagData,
  timezoneData,
  languageData,
  currencyData,
  bookingTypeData,
  continentData,
  redirect = true,
}: CityFormProps) {
  const redirectDefault = "/city";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const submit = useSubmit();
  const { setDirty } = useFormPage();
  const createCity = useCreateCity();
  const updateCity = useUpdateCity();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, mode, isUpdate } = useAppForm<CityFormSchema>({
    schema: CitySchema,
    defaultValues: initialData
      ? initCityFormValues(initialData)
      : cityDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.City,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty]);

  const onSubmit = (values: CityFormSchema) => {
    submit({
      mutation: initialData
        ? updateCity.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createCity.mutateAsync(values),
      success: isUpdate ? "City updated" : "City created",
      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(cityDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(cityDefaultValues);
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
          steps={citySteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={citySteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep />
            </FormWizardStep>

            <FormWizardStep index={1}>
              <LocationStep
                bookingTypeData={bookingTypeData}
                continentData={continentData}
                currencyData={currencyData}
                languageData={languageData}
                searchTagData={searchTagData}
                countryData={countryData}
                timezoneData={timezoneData}
              />
            </FormWizardStep>

            <FormWizardStep index={2}>
              <MediaStep />
            </FormWizardStep>

            <FormWizardStep index={3}>
              <SearchStep
                bookingTypeData={bookingTypeData}
                searchTagData={searchTagData}
              />
            </FormWizardStep>

            <FormWizardStep index={4}>
              <TravelStep />
            </FormWizardStep>

            <FormWizardStep index={5}>
              <StatusStep />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
