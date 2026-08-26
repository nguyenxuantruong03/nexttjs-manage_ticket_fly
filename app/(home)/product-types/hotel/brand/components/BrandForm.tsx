"use client";

import { useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "next/navigation";

import { AppForm } from "@/components/form/form-data";
import ConfirmRedirectDialog from "@/components/common/custom/confirm-redirect-dialog";

import FormWizard from "@/components/form/wizard/FormWizard";
import FormWizardHeader from "@/components/form/wizard/FormWizardHeader";
import FormWizardContent from "@/components/form/wizard/FormWizardContent";
import FormWizardFooter from "@/components/form/wizard/FormWizardFooter";
import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";
import { useFormDraft } from "@/hooks/useFormDraft";
import { useFormPage } from "@/components/form/form-context";
import { useConfirmDialogStorage } from "@/hooks/localStorage/useConfirmDialogStorage";

import BasicStep from "./step/basic.step";

import { BrandSchema, BrandFormSchema } from "./form/schema";
import { brandDefaultValues } from "./form/default-values";
import { initHotelBrandFormValues } from "./form/init-value";
import { hotelBrandSteps } from "./step/steps";

import { DraftEntity } from "@/components/daft/draft-config";


import {
  useCreateHotelBrand,
  useUpdateHotelBrand,
} from "@/hooks/product-types/hotel/hotel-brand";
import SettingsStep from "./step/setting.step";
import { HotelBrand } from "@/types/product-types/hotel/hotel-detail";

interface HotelBrandFormProps {
  initialData?: HotelBrand;
  redirect?: boolean;
}

export default function BrandForm({
  initialData,
  redirect = true,
}: HotelBrandFormProps) {
  const redirectDefault = "hotel/brand";

  const resetWizardRef = useRef<(() => void) | null>(null);

  const { confirmDialog, openDialog, shouldShow, cancelDialog } =
    useConfirmDialogStorage("confirm-redirect");

  const { setDirty } = useFormPage();

  const submit = useSubmit();

  const searchParams = useSearchParams();

  const createHotelBrand = useCreateHotelBrand();
  const updateHotelBrand = useUpdateHotelBrand();

  const currentDraftId = useMemo(() => {
    if (initialData) {
      return `edit-${initialData.id}`;
    }

    return searchParams.get("draft") ?? crypto.randomUUID();
  }, [initialData, searchParams]);

  const { form, isUpdate } = useAppForm<BrandFormSchema>({
    schema: BrandSchema,
    defaultValues: initialData
      ? initHotelBrandFormValues(initialData)
      : brandDefaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  const { clearDraft } = useFormDraft({
    form,
    entity: DraftEntity.HotelBrand,
    draftId: currentDraftId,
  });

  useEffect(() => {
    setDirty(form.formState.isDirty);
  }, [form.formState.isDirty, setDirty]);

  const onSubmit = (values: BrandFormSchema) => {
    submit({
      mutation: initialData
        ? updateHotelBrand.mutateAsync({
            id: initialData.id,
            data: values,
          })
        : createHotelBrand.mutateAsync(values),

      success: isUpdate ? "HotelBrand updated" : "HotelBrand created",

      redirect: redirect ? redirectDefault : undefined,
    });

    clearDraft();

    if (!redirect) {
      openDialog();
      form.reset(brandDefaultValues);
      resetWizardRef.current?.();
      return;
    }

    form.reset(brandDefaultValues);
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
          steps={hotelBrandSteps}
          loading={isSubmitting}
          unlockAll={!!initialData}
          onResetReady={(reset) => {
            resetWizardRef.current = reset;
          }}
        >
          <FormWizardHeader steps={hotelBrandSteps} />

          <FormWizardContent>
            <FormWizardStep index={0}>
              <BasicStep />
            </FormWizardStep>
            <FormWizardStep index={0}>
              <SettingsStep />
            </FormWizardStep>
          </FormWizardContent>

          <FormWizardFooter form={form} onSubmit={onSubmit} />
        </FormWizard>
      </AppForm>
    </>
  );
}
