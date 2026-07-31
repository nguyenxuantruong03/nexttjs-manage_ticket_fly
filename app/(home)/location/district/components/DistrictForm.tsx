"use client";

import { AppForm } from "@/components/form/form-data";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import BasicStep from "./step/basic.step";
import LocationStep from "./step/location.step";

import { useEffect, useMemo, useRef } from "react";
import { useFormPage } from "@/components/form/form-context";
import { useSearchParams } from "next/navigation";
import { useFormDraft } from "@/hooks/useFormDraft";
import { DraftEntity } from "@/components/daft/draft-config";
import { District } from "@/types/bookings/location/district";
import { DistrictFormSchema, DistrictSchema } from "./form/schema";
import { DistrictSteps } from "./step/steps";
import {
  useCreateDistrict,
  useUpdateDistrict,
} from "@/hooks/location/district";
import { initDistrictFormValues } from "./form/init-value";
import { districtDefaultValues } from "./form/default-values";
import { City } from "@/types/bookings/location/city";
import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";
import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";
import { Country } from "@/types/bookings/location/country";
interface DistrictFormProps {
  initialData?: District;
  cityData: City[];
  countryData: Country[];
  redirect?: boolean;
}

export default function DistrictForm({
  initialData,
  cityData,
  countryData,
  redirect = true,
}: DistrictFormProps) {
  const redirectDefault = "/district";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const submit = useSubmit();
  const { setDirty } = useFormPage();
  const createDistrict = useCreateDistrict();
  const updateDistrict = useUpdateDistrict();

  const searchParams = useSearchParams();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, mode, isUpdate } = useAppForm<DistrictFormSchema>({
    schema: DistrictSchema,
    defaultValues: initialData
      ? initDistrictFormValues(initialData)
      : districtDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.District,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty]);

  const onSubmit = (values: DistrictFormSchema) => {
    submit({
      mutation: initialData
        ? updateDistrict.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createDistrict.mutateAsync(values),
      success: isUpdate ? "District updated" : "District created",
      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(districtDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(districtDefaultValues);
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
          steps={DistrictSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={DistrictSteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep cityData={cityData} countryData={countryData} />
            </FormWizardStep>

            <FormWizardStep index={1}>
              <LocationStep />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
