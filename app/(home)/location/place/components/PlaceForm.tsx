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
import CategoryStep from "./step/category.step";
import MediaStep from "./step/media.step";
import SearchStep from "./step/search.step";
import StatusStep from "./step/status.step";

import {
  useCreatePlace,
  useUpdatePlace,
} from "@/hooks/location/place";

import { useEffect, useMemo, useRef } from "react";
import { useFormPage } from "@/components/form/form-context";
import { useSearchParams } from "next/navigation";

import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";
import { initPlaceFormValues } from "./form/init-value";

import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";
import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";

import { Place } from "@/types/location/place/place";
import { Address } from "@/types/location/address";
import { City } from "@/types/location/city";
import { Country } from "@/types/location/country/country";
import { District } from "@/types/location/district";
import { Ward } from "@/types/location/ward";
import { SearchTag } from "@/types/searchs/search/tag.types";
import { PlaceType } from "@/types/location/place/place-type.type";
import { BookingType } from "@/types/common/commerce/booking-type";

interface PlaceFormProps {
  initialData?: Place;

  addresses: Address[];
  cities: City[];
  countries: Country[];
  districts: District[];
  wards: Ward[];

  placeTypeData: PlaceType[];

  searchTagData: SearchTag[];
  bookingTypeData: BookingType[]
  redirect?: boolean;
}

export default function PlaceForm({
  initialData,
  addresses,
  cities,
  countries,
  districts,
  wards,
  placeTypeData,
  searchTagData,
  bookingTypeData,
  redirect = true,
}: PlaceFormProps) {
  const redirectDefault = "/location/place";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const {
    confirmDialog,
    openDialog,
    shouldShow,
    cancelDialog,
  } = useConfirmDialogStorage("confirm-redirect");

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

  const { form, isUpdate } = useAppForm<PlaceFormSchema>({
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
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: PlaceFormSchema) => {
    submit({
      mutation: initialData
        ? updatePlace.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createPlace.mutateAsync(values),

      success: isUpdate
        ? "Place updated"
        : "Place created",

      redirect: redirect
        ? redirectDefault
        : undefined,
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

      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={isSubmitting}
      >
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
            {/* ======================================================
                0 - BASIC
            ====================================================== */}

            <FormWizardStep index={0}>
              <BasicStep />
            </FormWizardStep>

            {/* ======================================================
                1 - LOCATION
            ====================================================== */}

            <FormWizardStep index={1}>
              <LocationStep
                addresses={addresses}
                cities={cities}
                countries={countries}
                districts={districts}
                wards={wards}
              />
            </FormWizardStep>

            {/* ======================================================
                2 - CATEGORY
            ====================================================== */}

            <FormWizardStep index={2}>
              <CategoryStep
                placeTypeData={placeTypeData}
              />
            </FormWizardStep>

            {/* ======================================================
                3 - MEDIA
            ====================================================== */}

            <FormWizardStep index={3}>
              <MediaStep />
            </FormWizardStep>

            {/* ======================================================
                4 - SEARCH
            ====================================================== */}

            <FormWizardStep index={4}>
              <SearchStep
                bookingTypeData={bookingTypeData}
                searchTagData={searchTagData}
              />
            </FormWizardStep>

            {/* ======================================================
                5 - STATUS
            ====================================================== */}

            <FormWizardStep index={5}>
              <StatusStep />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter
            form={form}
            onSubmit={onSubmit}
          />
        </FormWizard>
      </AppForm>
    </>
  );
}