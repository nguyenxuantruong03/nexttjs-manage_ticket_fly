"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import { PlaceSchema, PlaceFormSchema } from "./form/schema";

import { placeDefaultValues } from "./form/default-values";

import { placeSteps } from "./step/steps";

import BasicStep from "./step/basic.step";
import LocationStep from "./step/location.step";
import MediaStep from "./step/media.step";
import SearchStep from "./step/search.step";
import StatusStep from "./step/status.step";

import { useCreatePlace, useUpdatePlace } from "@/hooks/location/place";
import { useEffect, useMemo, useRef } from "react";
import { useFormPage } from "@/components/form/form-context";
import { useSearchParams } from "next/navigation";
import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";
import { Place } from "@/types/bookings/location/place";
import { initPlaceFormValues } from "./form/init-value";
import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";
import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";
import { Address } from "@/types/bookings/location/address";
import { SearchTag } from "@/types/bookings/search/tag.types";
import { City } from "@/types/bookings/location/city";
import { Country } from "@/types/bookings/location/country";
import { District } from "@/types/bookings/location/district";
import { Ward } from "@/types/bookings/location/ward";
interface PlaceFormProps {
  initialData?: Place;
  addresses: Address[];
  cities: City[];
  countries: Country[];
  districts: District[];
  wards: Ward[];
  searchTagData: SearchTag[];
  redirect?: boolean;
}

export default function PlaceForm({
  initialData,
  addresses,
  cities,
  countries,
  districts,
  wards,
  searchTagData,
  redirect = true,
}: PlaceFormProps) {
  const redirectDefault = "/place";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const submit = useSubmit();
  const { setDirty } = useFormPage();
  const createPlace = useCreatePlace();
  const updatePlace = useUpdatePlace();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, mode, isUpdate } = useAppForm<PlaceFormSchema>({
    schema: PlaceSchema,
    defaultValues: initialData
      ? initPlaceFormValues(initialData)
      : placeDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.Place,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty]);

  const onSubmit = (values: PlaceFormSchema) => {
    submit({
      mutation: initialData
        ? updatePlace.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createPlace.mutateAsync(values),
      success: isUpdate ? "Place updated" : "Place created",
      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(placeDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(placeDefaultValues);
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
          steps={placeSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={placeSteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep />
            </FormWizardStep>

            <FormWizardStep index={1}>
              <LocationStep
                addresses={addresses}
                cities={cities}
                countries={countries}
                districts={districts}
                wards={wards}
              />
            </FormWizardStep>

            <FormWizardStep index={2}>
              <MediaStep />
            </FormWizardStep>

            <FormWizardStep index={3}>
              <SearchStep searchTagData={searchTagData} />
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
